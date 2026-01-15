# Cookiebot Implementation Guide

## Overview
This project uses Cookiebot as a Consent Management Platform (CMP) to ensure GDPR compliance for cookie usage and user tracking, particularly important for operations in Spain and the European Union.

## Implementation Details

### 1. Cookiebot Component
**Location:** `/app/components/Cookiebot.tsx`

The Cookiebot component loads the consent management script with the following features:
- Uses Next.js `Script` component for optimal loading
- `strategy="beforeInteractive"` ensures Cookiebot loads before other tracking scripts
- Reads Cookiebot ID from environment variables with fallback to default

### 2. Google Analytics Integration
**Location:** `/app/components/GoogleAnalytics.tsx`

Google Analytics has been updated to respect Cookiebot consent:
- Added `data-cookieconsent="statistics"` attribute to GA scripts
- Enabled `anonymize_ip: true` for better privacy compliance
- Added `cookie_flags: 'SameSite=None;Secure'` for proper cookie handling
- Scripts only execute after user provides consent for statistics cookies

### 3. Root Layout Integration
**Location:** `/app/layout.tsx`

The components are loaded in the correct order:
1. **Cookiebot** - Loads first to manage consent
2. **Google Analytics** - Loads after and respects consent preferences

## Configuration

### Environment Variables

Add to your `.env.local` file:

```bash
# Cookiebot Consent Management Platform (CMP)
NEXT_PUBLIC_COOKIEBOT_ID=474b1dce-7229-40d3-88c2-a2323b9a57f9
```

The Cookiebot ID (`474b1dce-7229-40d3-88c2-a2323b9a57f9`) is already configured and connected to:
- **Account:** lramio2026@gmail.com
- **Start Date:** 15/01/2026, 16:31

### Cookiebot Dashboard

Access your Cookiebot settings at: [https://manage.cookiebot.com](https://manage.cookiebot.com)

From the dashboard you can:
- Customize the consent banner appearance
- Set cookie categories (Necessary, Preferences, Statistics, Marketing)
- Configure consent mode (Opt-in/Opt-out)
- View compliance reports
- Manage cookie declarations
- Set up predefined consent modes

## GDPR Compliance Features

### 1. Consent Categories
Cookiebot automatically categorizes cookies into:
- **Necessary:** Always active, required for site functionality
- **Preferences:** Remember user settings and preferences
- **Statistics:** Track anonymous usage data (Google Analytics)
- **Marketing:** Track users across websites for advertising

### 2. Cookie Declaration
Cookiebot automatically scans your website and creates a detailed cookie declaration showing:
- Cookie names
- Cookie purposes
- Cookie durations
- Cookie providers

### 3. Consent Documentation
All user consents are logged and stored for compliance documentation requirements under GDPR Article 7.

## Testing

### 1. Local Development
```bash
cd /home/user/webapp && npm run dev
```

Visit your site and you should see the Cookiebot consent banner on first visit.

### 2. Verify Implementation
1. Open browser DevTools (Console)
2. Check for Cookiebot object: `window.Cookiebot`
3. Verify consent state: `window.Cookiebot.consent.statistics`
4. Confirm Google Analytics only loads after statistics consent

### 3. Test Consent Scenarios

**Scenario 1: Accept All**
- Click "Accept All" on consent banner
- Verify Google Analytics scripts load
- Check `_ga` cookies are set

**Scenario 2: Reject Statistics**
- Click "Customize" on consent banner  
- Uncheck "Statistics" category
- Verify Google Analytics scripts do NOT load
- Confirm no `_ga` cookies are set

**Scenario 3: Withdraw Consent**
- Accept initially
- Find Cookiebot declaration (usually in footer)
- Click to open consent manager
- Withdraw statistics consent
- Verify Google Analytics stops tracking

## Manual Configuration in Cookiebot Dashboard

### Recommended Settings for Spain

1. **Language Settings:**
   - Primary language: Spanish (Español)
   - Enable language detection
   - Add English as secondary language

2. **Consent Mode:**
   - Enable "Opt-in" mode (required for GDPR)
   - Disable "Do Not Sell" (CCPA not required for Spain)

3. **Banner Appearance:**
   - Choose banner position (bottom/top)
   - Customize colors to match brand
   - Add company logo

4. **Cookie Categories:**
   - Necessary: Always active
   - Statistics: Include Google Analytics
   - Marketing: Include any ad trackers (if applicable)

5. **Prior Consent:**
   - Enable for Statistics cookies
   - Enable for Marketing cookies

## Adding More Tracking Services

When adding additional tracking/analytics services, follow this pattern:

```tsx
// In your component or script
<Script 
  src="https://example-tracking.com/script.js"
  strategy="afterInteractive"
  data-cookieconsent="statistics"  // or "marketing" depending on purpose
/>
```

Categories:
- `data-cookieconsent="statistics"` - For analytics (GA, Matomo, etc.)
- `data-cookieconsent="marketing"` - For ads (Facebook Pixel, Google Ads, etc.)
- `data-cookieconsent="preferences"` - For user preference storage
- No attribute needed for necessary functionality

## Troubleshooting

### Issue: Consent banner doesn't appear
**Solution:** 
- Clear browser cache and cookies
- Check browser console for errors
- Verify Cookiebot ID is correct
- Ensure script loads before other tracking scripts

### Issue: Google Analytics loads without consent
**Solution:**
- Verify `data-cookieconsent="statistics"` attribute is present
- Check script loading order (Cookiebot must load first)
- Clear cookies and test in incognito mode

### Issue: Consent banner shows in wrong language
**Solution:**
- Configure language settings in Cookiebot dashboard
- Enable automatic language detection
- Test with browser language preferences

## Resources

- **Cookiebot Documentation:** [https://www.cookiebot.com/en/developer/](https://www.cookiebot.com/en/developer/)
- **GDPR Compliance:** [https://gdpr.eu](https://gdpr.eu)
- **Cookie Law Spain:** [https://www.aepd.es](https://www.aepd.es) (Agencia Española de Protección de Datos)
- **Google Analytics & GDPR:** [https://support.google.com/analytics/answer/9019185](https://support.google.com/analytics/answer/9019185)

## Next Steps

1. ✅ Cookiebot script implemented
2. ✅ Google Analytics respects consent
3. 🔲 Customize banner appearance in Cookiebot dashboard
4. 🔲 Add cookie policy page to website
5. 🔲 Add privacy policy page to website
6. 🔲 Link to cookie declaration from footer
7. 🔲 Test all consent scenarios
8. 🔲 Submit domain for automatic cookie scanning

## Support

For Cookiebot support:
- **Email:** support@cookiebot.com
- **Dashboard:** [https://manage.cookiebot.com](https://manage.cookiebot.com)
- **Documentation:** [https://www.cookiebot.com/en/developer/](https://www.cookiebot.com/en/developer/)

---

**Last Updated:** January 15, 2026
**Implementation Status:** ✅ Complete
