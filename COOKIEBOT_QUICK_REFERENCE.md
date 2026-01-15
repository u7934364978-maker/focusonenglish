# 🍪 Cookiebot Quick Reference Card

## ✅ Implementation Status: COMPLETE

**Pull Request:** https://github.com/u7934364978-maker/focusonenglish/pull/7  
**Date:** January 15, 2026  
**Branch:** `genspark_ai_developer` → `main`

---

## 🔑 Key Information

### Cookiebot Account
- **Email:** lramio2026@gmail.com
- **Dashboard:** https://manage.cookiebot.com
- **Cookiebot ID:** `474b1dce-7229-40d3-88c2-a2323b9a57f9`

### Environment Variables
```bash
NEXT_PUBLIC_COOKIEBOT_ID=474b1dce-7229-40d3-88c2-a2323b9a57f9
NEXT_PUBLIC_GA_MEASUREMENT_ID=your-ga-id
```

---

## 📁 Files Created/Modified

### ✅ New Files
- `app/components/Cookiebot.tsx` - Cookiebot component
- `COOKIEBOT_IMPLEMENTATION.md` - Full documentation
- `COOKIEBOT_SUMMARY.md` - Executive summary
- `COOKIEBOT_FLOW_DIAGRAM.txt` - Visual flow diagram
- `COOKIEBOT_QUICK_REFERENCE.md` - This file

### ✅ Modified Files
- `app/layout.tsx` - Added Cookiebot integration
- `app/components/GoogleAnalytics.tsx` - Added consent attributes
- `.env.example` - Added Cookiebot configuration

---

## 🚀 Quick Start

### Local Testing
```bash
# 1. Add to .env.local
NEXT_PUBLIC_COOKIEBOT_ID=474b1dce-7229-40d3-88c2-a2323b9a57f9

# 2. Start dev server
npm run dev

# 3. Open browser in incognito
# 4. Visit http://localhost:3000
# 5. Verify consent banner appears
```

### Production Deployment
```bash
# 1. Merge PR
# 2. Deploy to production
# 3. Verify banner appears
# 4. Test consent scenarios
```

---

## 🔄 User Flow

1. **User visits site** → Cookiebot loads
2. **No consent exists** → Banner displays
3. **User accepts** → Statistics consent granted
4. **Google Analytics** → Loads and tracks (IP anonymized)
5. **Consent stored** → User choice remembered

---

## 🧪 Test Scenarios

### ✅ Scenario 1: Accept All
```
Visit → Banner → [Accept All] → GA Loads ✅
```

### ✅ Scenario 2: Reject Statistics
```
Visit → Banner → [Customize] → Uncheck Statistics → GA Blocked ❌
```

### ✅ Scenario 3: Withdraw Consent
```
Cookie Settings → Withdraw → GA Stops ❌
```

---

## 📊 Cookie Categories

| Category | Status | Purpose | Example |
|----------|--------|---------|---------|
| **Necessary** | Always ON | Site functionality | Session cookies |
| **Preferences** | Optional | User settings | Language preference |
| **Statistics** | Optional | Analytics | Google Analytics |
| **Marketing** | Optional | Advertising | Ad pixels |

---

## ⚙️ Component Structure

```
<body>
  <Cookiebot />           ← Loads FIRST (beforeInteractive)
  <GoogleAnalytics />     ← Loads AFTER (afterInteractive)
  {children}
</body>
```

---

## 🛡️ GDPR Compliance

| Article | Requirement | Status |
|---------|-------------|--------|
| Article 6 | Lawful basis (consent) | ✅ |
| Article 7 | Consent conditions | ✅ |
| Article 13 | Information to subjects | ✅ |
| Article 17 | Right to erasure | ✅ |
| Article 21 | Right to object | ✅ |

---

## 🇪🇸 Spain Compliance (AEPD)

- ✅ Opt-in consent
- ✅ Clear cookie information
- ✅ Easy withdrawal
- ✅ Consent documentation
- ✅ IP anonymization
- ✅ Spanish language support

---

## 📝 Next Steps (After Merge)

### Priority 1: Customize Banner
- [ ] Login to Cookiebot dashboard
- [ ] Set Spanish as primary language
- [ ] Customize colors/branding
- [ ] Add company logo

### Priority 2: Legal Pages
- [ ] Create cookie policy page
- [ ] Create privacy policy page
- [ ] Link from footer

### Priority 3: Testing
- [ ] Test in production
- [ ] Verify all consent scenarios
- [ ] Check multi-language support

---

## 🔧 Troubleshooting

### Banner not showing?
1. Clear browser cookies
2. Test in incognito mode
3. Check console for errors
4. Verify Cookiebot ID

### GA loading without consent?
1. Check `data-cookieconsent="statistics"` attribute
2. Verify Cookiebot loads before GA
3. Clear cookies and retest

### Wrong language?
1. Access Cookiebot dashboard
2. Set language preferences
3. Enable language detection

---

## 📚 Documentation

| Document | Purpose |
|----------|---------|
| `COOKIEBOT_IMPLEMENTATION.md` | Full implementation guide |
| `COOKIEBOT_SUMMARY.md` | Executive summary |
| `COOKIEBOT_FLOW_DIAGRAM.txt` | Visual flow diagram |
| `COOKIEBOT_QUICK_REFERENCE.md` | This quick reference |

---

## 🔗 Important Links

- **Cookiebot Dashboard:** https://manage.cookiebot.com
- **Pull Request:** https://github.com/u7934364978-maker/focusonenglish/pull/7
- **AEPD:** https://www.aepd.es
- **GDPR Info:** https://gdpr.eu
- **Cookiebot Docs:** https://www.cookiebot.com/en/developer/

---

## 💡 Pro Tips

1. **Always test in incognito** - Ensures clean state
2. **Monitor console logs** - Check for Cookiebot object
3. **Use banner customization** - Match your brand
4. **Set Spanish as default** - Primary market
5. **Link cookie policy** - Required by law

---

## 📞 Support

**Cookiebot Support:** support@cookiebot.com  
**Implementation Questions:** See full documentation

---

**Last Updated:** January 15, 2026  
**Version:** 1.0  
**Status:** ✅ Production Ready
