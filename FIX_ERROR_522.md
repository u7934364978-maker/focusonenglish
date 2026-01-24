# 🔧 Fix Error 522 - Connection Timed Out

## Problem

The site `focus-on-english.com` is showing a Cloudflare Error 522, which means:
- Cloudflare is able to reach the origin server
- But the origin server is not responding within the timeout period (typically 100 seconds)

---

## Root Cause Analysis

The error 522 typically occurs when:

1. **Origin server is down** - Vercel deployment failed or server crashed
2. **DNS configuration issue** - Domain pointing to wrong origin
3. **Firewall blocking Cloudflare IPs** - Origin blocking Cloudflare requests
4. **Origin server overloaded** - Server taking too long to respond
5. **SSL/TLS handshake issue** - Certificate or SSL configuration problem

---

## Immediate Actions Taken

### 1. **Triggered New Vercel Deployment**
```bash
# Commit pushed to main branch
commit 3cac727e - chore: Trigger Vercel redeploy to fix 522 error
```

This will:
- Force Vercel to rebuild and redeploy the application
- Clear any cached builds
- Restart the origin server

**Wait Time**: 2-5 minutes for deployment to complete

---

## Step-by-Step Resolution

### **STEP 1: Verify Vercel Deployment Status**

1. **Check Vercel Dashboard**:
   - Go to: https://vercel.com/dashboard
   - Find project: `focusonenglish`
   - Check latest deployment status

2. **Look for**:
   - ✅ "Ready" status = deployment successful
   - ❌ "Error" status = build failed
   - 🔄 "Building" = deployment in progress

3. **If deployment failed**:
   ```bash
   # Check build logs in Vercel dashboard
   # Common issues:
   - TypeScript errors
   - Missing dependencies
   - Environment variables not set
   ```

---

### **STEP 2: Verify DNS Configuration**

**Check Current DNS Settings**:

```bash
# Check if domain resolves
dig focus-on-english.com

# Check nameservers
dig focus-on-english.com NS

# Check Cloudflare proxy status
# Should show Cloudflare IPs (orange cloud = proxied)
```

**Expected Configuration**:
- **Type**: CNAME or A record
- **Name**: `@` or `focus-on-english.com`
- **Value**: Should point to Vercel (`cname.vercel-dns.com`) or Vercel IP
- **Proxy Status**: Orange cloud (Proxied through Cloudflare)

**If DNS is incorrect**:
1. Go to Cloudflare DNS settings
2. Update A/CNAME record to point to Vercel
3. Ensure proxy is enabled (orange cloud)

---

### **STEP 3: Check Cloudflare SSL/TLS Settings**

1. **Go to Cloudflare Dashboard** → Your domain
2. **SSL/TLS** tab
3. **Check encryption mode**:
   - Should be: **Full (strict)** or **Full**
   - NOT: Flexible (causes issues with Vercel)

4. **If set to Flexible**, change to **Full**:
   - SSL/TLS → Overview → Encryption mode
   - Select "Full" or "Full (strict)"
   - Save

---

### **STEP 4: Verify Vercel Domain Configuration**

1. **Go to Vercel Dashboard** → Project Settings
2. **Domains** tab
3. **Verify domains are added**:
   - `focus-on-english.com`
   - `www.focus-on-english.com` (if applicable)

4. **Check domain status**:
   - ✅ Valid = configured correctly
   - ❌ Invalid = needs configuration

5. **If domain not added**:
   ```
   - Add domain in Vercel
   - Follow Vercel's DNS instructions
   - Update Cloudflare DNS accordingly
   ```

---

### **STEP 5: Temporarily Bypass Cloudflare (Testing)**

To isolate if Cloudflare is the issue:

1. **Go to Cloudflare DNS settings**
2. **Click orange cloud** next to domain record
3. **Turn to gray cloud** (DNS only, no proxy)
4. **Wait 5 minutes** for DNS propagation
5. **Test site directly**: Should connect to Vercel

**If this works**:
- Issue is with Cloudflare proxy configuration
- Re-enable proxy (orange cloud)
- Adjust Cloudflare settings (SSL, firewall, etc.)

**If this still fails**:
- Issue is with Vercel deployment itself
- Check Vercel logs and status

---

### **STEP 6: Check Vercel Edge Network Status**

```bash
# Test Vercel directly (bypass domain)
curl -I https://focusonenglish.vercel.app

# Should return 200 OK or 308 redirect
# If 502/504 = Vercel server issue
```

---

### **STEP 7: Review Environment Variables**

Verify critical environment variables are set in Vercel:

**Required**:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SITE_URL` = `https://focus-on-english.com`

**Optional but recommended**:
- `OPENAI_API_KEY`
- `HUBSPOT_ACCESS_TOKEN`

**Missing env vars can cause deployment to fail silently**

---

## Quick Fixes Checklist

- [ ] Wait 5 minutes for new Vercel deployment
- [ ] Check Vercel dashboard for "Ready" status
- [ ] Verify Cloudflare SSL is set to "Full" not "Flexible"
- [ ] Confirm DNS points to Vercel
- [ ] Test with gray cloud (DNS only) to isolate issue
- [ ] Check Vercel domain configuration
- [ ] Review Vercel deployment logs for errors
- [ ] Verify environment variables in Vercel

---

## Alternative: Deploy to Cloudflare Pages Directly

If Vercel continues to have issues, consider deploying directly to Cloudflare Pages:

### **Option A: Keep Vercel**
- Current setup: Domain → Cloudflare (proxy) → Vercel (origin)
- Pros: Vercel preview deployments, edge functions
- Cons: Extra layer, potential 522 errors

### **Option B: Switch to Cloudflare Pages**
- New setup: Domain → Cloudflare Pages (direct)
- Pros: Simpler, no proxy issues, faster in some regions
- Cons: Different platform, need to reconfigure

**To switch to Cloudflare Pages**:
1. Disconnect Vercel deployment
2. Go to Cloudflare Dashboard → Workers & Pages
3. Create new Pages project
4. Connect GitHub repo
5. Configure build settings (see `CLOUDFLARE_DEPLOY.md`)

---

## Expected Timeline

- **Vercel rebuild**: 2-5 minutes
- **DNS propagation**: 5-60 minutes
- **Cloudflare cache clear**: Immediate to 5 minutes

**Total**: Site should be working within **10-15 minutes** if Vercel deployment succeeds

---

## Monitoring

Check these after fixes:

```bash
# 1. Test site loads
curl -I https://focus-on-english.com

# 2. Test A1 course (should be public)
curl -I https://focus-on-english.com/curso-a1

# 3. Check response times
curl -w "@curl-format.txt" -o /dev/null -s https://focus-on-english.com
```

---

## Contact Support (If Still Failing)

### **Vercel Support**:
- Email: support@vercel.com
- Dashboard: Help → Contact Support
- Provide: Project name, deployment URL, error logs

### **Cloudflare Support**:
- Dashboard: Help → Contact Support
- Provide: Domain, error 522 screenshot, troubleshooting steps tried

---

## Success Criteria

Site is working when:
- ✅ `https://focus-on-english.com` loads without errors
- ✅ No Error 522 messages
- ✅ `/curso-a1` accessible without authentication
- ✅ Response time < 2 seconds
- ✅ SSL certificate valid

---

**Last Updated**: 2026-01-23  
**Status**: 🔄 Deployment triggered, waiting for completion  
**Next Check**: In 5-10 minutes
