# Technical Specification: Automatic Vercel Deployment

## Task Complexity
**Level**: Easy

This is a straightforward configuration task that requires modifying existing Vercel settings and optionally adding a GitHub Actions workflow.

---

## Technical Context

### Current State
- **Project**: Next.js 15.1.3 application (Focus English - language learning platform)
- **Git Repository**: `https://github.com/u7934364978-maker/focusonenglish.git`
- **Current Vercel Config**: Automatic deployments **DISABLED** in `vercel.json`:
  ```json
  {
    "github": {
      "enabled": false,
      "autoAlias": false,
      "silent": true
    }
  }
  ```
- **Build Command**: `npm run build` (Next.js build + cache cleanup)
- **Node Version**: ≥20.9.0
- **Package Manager**: npm ≥10.0.0

### Dependencies
- `next`: ^15.1.3
- `vercel`: ^47.0.4 (dev dependency)
- Various integrations: OpenAI, Supabase, Stripe, Resend

---

## Implementation Approach

There are **two options** for automatic Vercel deployment:

### **Option 1: Vercel GitHub Integration (Recommended)**
Enable Vercel's native GitHub integration for automatic deployments on push.

**Pros:**
- ✅ Zero configuration needed in code
- ✅ Automatic preview deployments for PRs
- ✅ Built-in deployment status checks
- ✅ Managed by Vercel platform
- ✅ Fastest deployment times

**Cons:**
- ❌ Less control over deployment process
- ❌ Requires Vercel dashboard access

### **Option 2: GitHub Actions**
Create a GitHub Actions workflow that triggers on push and deploys via Vercel CLI.

**Pros:**
- ✅ Full control over deployment pipeline
- ✅ Can add custom checks/tests before deploy
- ✅ Can deploy to multiple environments
- ✅ Versioned in repository

**Cons:**
- ❌ Requires GitHub Actions configuration
- ❌ Requires Vercel token in GitHub secrets
- ❌ Slightly slower (GitHub → Vercel vs direct)

**Recommendation**: **Option 1** is simpler and sufficient for most use cases. Option 2 is better if you need pre-deployment checks or multi-environment deployments.

---

## Source Code Structure Changes

### Option 1: Vercel GitHub Integration
**File Modified**: `vercel.json`
```json
{
  "builds": [],
  "routes": [
    {
      "src": "/(.*)",
      "status": 410,
      "dest": "/"
    }
  ],
  "version": 2,
  "public": false,
  "github": {
    "enabled": true,          // ← CHANGE: Enable GitHub integration
    "autoAlias": true,         // ← CHANGE: Auto-alias preview deployments
    "silent": false            // ← CHANGE: Show deployment comments
  }
}
```

### Option 2: GitHub Actions
**File Created**: `.github/workflows/deploy-vercel.yml`
```yaml
name: Deploy to Vercel

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

**File Modified** (if Option 2): `vercel.json` - Keep GitHub integration disabled

---

## Configuration Requirements

### Environment Variables (Vercel Dashboard)
These must be configured in Vercel regardless of deployment method:

**Required:**
- `OPENAI_API_KEY` - For AI evaluation endpoints
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase public key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service key

**Optional (if used):**
- `STRIPE_SECRET_KEY` - Stripe payments
- `STRIPE_WEBHOOK_SECRET` - Stripe webhooks
- `HUBSPOT_ACCESS_TOKEN` - CRM integration
- `HUBSPOT_PORTAL_ID` - HubSpot portal
- `RESEND_API_KEY` - Email service
- `NEXT_PUBLIC_SITE_URL` - Production URL

### GitHub Secrets (Option 2 only)
If using GitHub Actions, add these to repository secrets:
- `VERCEL_TOKEN` - Vercel API token (from https://vercel.com/account/tokens)
- `VERCEL_ORG_ID` - Organization ID (from `.vercel/project.json`)
- `VERCEL_PROJECT_ID` - Project ID (from `.vercel/project.json`)

---

## Implementation Steps

### Option 1: Enable Vercel GitHub Integration
1. Update `vercel.json` to enable GitHub integration
2. Connect repository in Vercel dashboard (if not already connected)
3. Configure production branch as `main`
4. Verify environment variables in Vercel
5. Push change to trigger first automatic deployment
6. Verify deployment succeeds

### Option 2: GitHub Actions Workflow
1. Create `.github/workflows/` directory
2. Create `deploy-vercel.yml` workflow file
3. Obtain Vercel token from dashboard
4. Add secrets to GitHub repository settings
5. Push workflow to trigger deployment
6. Verify deployment in GitHub Actions tab

---

## Verification Approach

### Pre-Deployment Checks
1. Verify `.gitignore` excludes:
   - `node_modules/`
   - `.next/`
   - `.vercel/`
   - `.env*.local`
   - `*.log`

2. Verify build succeeds locally:
   ```bash
   npm run build
   ```

### Post-Deployment Verification

**1. Deployment Success**
- Check Vercel dashboard for successful deployment
- Verify deployment URL is accessible
- Check deployment logs for errors

**2. API Endpoints**
Test critical endpoints:
```bash
# Test AI evaluation endpoint
curl -X POST https://your-app.vercel.app/api/evaluate-text-answer \
  -H "Content-Type: application/json" \
  -d '{"question":"Test","userAnswer":"Test","correctAnswer":"Test","level":"A1"}'

# Should return JSON with evaluation results
```

**3. Environment Variables**
- Verify OpenAI API calls work (check logs)
- Verify Supabase connection works
- Test authentication flow if applicable

**4. Build Output**
- Verify build completes in 2-5 minutes
- Check for no TypeScript errors
- Check for no ESLint errors

**5. Automatic Deployment**
- Make a small change (e.g., README update)
- Push to `main` branch
- Verify deployment triggers automatically
- Verify deployment completes successfully

---

## Risk Assessment

### Low Risks
- ✅ Configuration is reversible (can disable anytime)
- ✅ No code changes required (Option 1)
- ✅ Vercel provides deployment rollback

### Potential Issues
- ⚠️ **Missing environment variables**: Deployment succeeds but app doesn't work
  - **Mitigation**: Verify all required env vars before enabling
- ⚠️ **Build failures**: Automatic deployments fail
  - **Mitigation**: Test build locally first
- ⚠️ **Accidental deployments**: Every push triggers deployment
  - **Mitigation**: Use branch protection rules, require PR reviews

---

## Rollback Plan

If automatic deployments cause issues:

**Option 1:**
1. Set `"github": { "enabled": false }` in `vercel.json`
2. Push change to disable
3. Deploy manually via Vercel dashboard if needed

**Option 2:**
1. Delete `.github/workflows/deploy-vercel.yml`
2. Push change to remove workflow
3. Manually deploy via Vercel CLI: `vercel --prod`

**Immediate Rollback** (both options):
- Vercel dashboard → Deployments → Select previous → Promote to Production

---

## Estimated Timeline
- **Option 1**: 10-15 minutes (configuration + verification)
- **Option 2**: 20-30 minutes (workflow creation + secrets + verification)

---

## Success Criteria
1. ✅ Push to `main` branch triggers automatic deployment
2. ✅ Deployment completes successfully (build + deploy)
3. ✅ Application is accessible at production URL
4. ✅ All API endpoints respond correctly
5. ✅ Environment variables are correctly configured
6. ✅ No errors in Vercel deployment logs
