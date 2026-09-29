# Go Online NOW — no login needed (Netlify Drop)

Your ready-to-upload file is already in this folder:

  IT-Service-Report-Online.zip (2.1 MB)

It contains: index.html, IT_Service_Report_App.html, sw.js,
manifest.webmanifest, logo.png, logoo.png, penafrancia.png, robots.txt

## Steps (2 minutes)

1. Unzip `IT-Service-Report-Online.zip` into a new folder, e.g. Desktop\IT-Online
   (Netlify Drop wants the FILES, not the zip itself).

2. Go to https://app.netlify.com/drop

3. Drag ALL 8 files onto the page:
   index.html, IT_Service_Report_App.html, sw.js, manifest.webmanifest,
   logo.png, logoo.png, penafrancia.png, robots.txt

4. Netlify gives you a live link instantly, e.g.
   https://cheerful-biscuit-abc123.netlify.app
   Share that link with your IT team. Done.

5. (Optional) Change site name: Site settings → Change site name
   e.g. https://it-service-report-scsc.netlify.app

## If carousel 2nd slide is wrong online

It means penafrancia.png did not upload. Re-drag that file.
The app auto-falls back to logo.png so it never shows broken.

## GitHub Pages (alternative, needs login)

Commit 1b93f0a "online website + shared cloud storage" is ready locally.
`git push origin main` hangs = VS Code git waiting for GitHub auth.
Fix: VS Code Accounts (bottom-left) → Sign in with GitHub → Push again.
Then repo Settings → Pages → Deploy from branch → main/(root) →
https://pcsceddieboy.github.io/ServiceReportData/
