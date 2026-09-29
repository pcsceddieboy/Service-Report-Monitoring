# PERMANENT LINK — https://pcsceddieboy.github.io/ServiceReportData/

## Status right now
- Local commits ready: 1b93f0a, 482f027, 80cab3f (all on branch main)
- Push blocked: git needs YOUR GitHub login (I cannot click it for you)

## Publish in 30 seconds (do this once)

### In VS Code:
1. Bottom-left Accounts icon → Sign in with GitHub → Allow
2. Source Control (Ctrl+Shift+G) → ... → Push (or Sync)
   If asked, confirm push of 3 commits to origin/main

### On GitHub.com:
1. Open https://github.com/pcsceddieboy/ServiceReportData
2. Settings → Pages (left menu)
3. Source: Deploy from a branch → Branch: main → /(root) → Save
4. Wait 1-2 min → open https://pcsceddieboy.github.io/ServiceReportData/
   You will see Admin login with logoo ↔ penafrancia carousel.

## This link is lifetime free
- GitHub Pages = free forever for public repo
- Your folder ~2MB, limit 1GB. 100GB/month bandwidth = ~50,000 visits/month
- Files served: index.html → IT_Service_Report_App.html + logos + sw.js offline cache

## If Pages shows 404
- Check Actions tab for green check (deploy finished)
- Check Settings → Pages says "Your site is live"
- Hard refresh Ctrl+F5. Service worker version is it-report-v2.

## Next: shared database (so team sees same list)
See ONLINE_SETUP.md Part B. Create free Firebase Realtime Database,
paste URL in app → Connect → Sync now. Send me the URL and I will hard-code it.
