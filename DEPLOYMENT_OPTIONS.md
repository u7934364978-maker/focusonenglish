# Deployment Guide - Focus English

## 🎯 Deployment Options

### ✅ Option 1: Vercel (RECOMMENDED)

**Why Vercel?**
- ✅ Native Next.js support (created by Vercel team)
- ✅ Zero-config API routes
- ✅ Edge Functions out of the box
- ✅ Automatic Stripe webhooks setup
- ✅ Free SSL certificates
- ✅ Built-in analytics

**Deploy Steps:**

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy from project root
cd /home/user/webapp
vercel

# 4. Follow prompts:
#    - Setup and deploy? Y
#    - Which scope? (select your account)
#    - Link to existing project? N
#    - Project name? focusonenglish
#    - Directory? ./
#    - Override settings? N

# 5. For production deployment
vercel --prod
```

**Environment Variables to Set in Vercel Dashboard:**

```env
# Core
NODE_VERSION=20.9.0
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app

# Supabase (REQUIRED)
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Stripe (REQUIRED)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

# NextAuth (REQUIRED)
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=https://your-domain.vercel.app

# HubSpot (OPTIONAL)
HUBSPOT_ACCESS_TOKEN=pat-...

# OpenAI (REQUIRED for AI features)
OPENAI_API_KEY=sk-...
```

**Stripe Webhook Configuration:**
After deployment, configure Stripe webhook:
```
Endpoint URL: https://your-domain.vercel.app/api/webhooks/stripe
Events to send: 
  - customer.subscription.created
  - customer.subscription.updated
  - customer.subscription.deleted
  - invoice.payment_succeeded
  - invoice.payment_failed
```

---

### ⚠️ Option 2: Cloudflare Pages (Advanced - Requires Adapter)

**Note:** This option requires additional setup and may have limitations.

**Install @cloudflare/next-on-pages:**

```bash
npm install --save-dev @cloudflare/next-on-pages
```

**Update next.config.js:**

```javascript
const nextConfig = {
  // ... existing config
  
  // Add for Cloudflare Pages
  output: 'export', // For static export
  // OR use experimental edge runtime
  experimental: {
    runtime: 'edge',
  },
};
```

**Limitations:**
- API routes may not work as expected
- Limited to Edge Runtime capabilities
- Some Next.js features may be unsupported
- Requires significant refactoring

---

### Option 3: Netlify

Similar to Vercel, good Next.js support:

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

---

## 🔧 Current Issue with Cloudflare Pages

The current `wrangler.toml` configuration is incompatible with Cloudflare Pages because:

1. **Pages doesn't support `[build]` section** - This is for Workers
2. **Pages doesn't support `[site]` section** - This is for Workers
3. **API routes require special handling** - Not automatically supported

**Error Message:**
```
ERROR: Configuration file for Pages projects does not support "build"
ERROR: Configuration file for Pages projects does not support "site"
```

**Fixed wrangler.toml** has been updated to remove incompatible sections.

---

## 📋 Deployment Checklist

Before deploying:

- [ ] All environment variables documented
- [ ] Stripe webhooks configured
- [ ] Supabase policies reviewed
- [ ] Build passes locally: `npm run build`
- [ ] Type-check passes: `npm run type-check` (currently has errors)
- [ ] Database migrations applied
- [ ] DNS configured (if using custom domain)

---

## 🎯 Recommendation

**Use Vercel** for Focus English because:

1. Project has 15+ API routes (native support in Vercel)
2. Uses Edge Runtime features (Vercel optimized)
3. Stripe webhooks work out of the box
4. Zero configuration needed
5. Best developer experience for Next.js

Cloudflare Pages would require significant refactoring to support all API routes.

---

## 🚀 Quick Deploy Command

For fastest deployment:

```bash
npx vercel --prod
```

This will:
1. Install Vercel CLI if needed
2. Deploy directly to production
3. Provide deployment URL immediately

---

**Last Updated:** 2026-01-19
**Recommended:** Vercel
**Alternative:** Netlify
**Not Recommended:** Cloudflare Pages (without adapter)
