# IT Service Report — Online Setup (shared link + shared database)

Your app is a static site, so it can go online FREE. Two parts:

## PART A — Put the same link online (GitHub Pages, free)

You already have a repo: `https://github.com/pcsceddieboy/ServiceReportData.git`
Branch: `main`. Files ready: `index.html`, `IT_Service_Report_App.html`, `sw.js`,
`manifest.webmanifest`, `logo.png`, `logoo.png`, `penafrancia.png`, `robots.txt`.

### Option 1: VS Code one-click (easiest, no commands)

1. Open Source Control (Ctrl+Shift+G) → review changes → Message:
   `online website + shared cloud storage` → Commit → **Sync / Push**.
2. Make sure `penafrancia.png` is included. If the 2nd carousel slide shows
   `logo.png` online instead of Penafrancia, that file was not pushed.
3. On GitHub.com → open your `ServiceReportData` repo → **Settings → Pages**
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)** → Save
4. Wait ~1 minute. Your shareable link will be:
   **https://pcsceddieboy.github.io/ServiceReportData/**

### Option 2: Terminal commands

```powershell
cd "c:\Users\IT Team\Desktop\IT FILES 2026\ServiceReportData"
git add -A
git commit -m "online website + shared cloud storage"
git push -u origin main
```

Then do step 3 above on GitHub.com.

That page auto-redirects to `IT_Service_Report_App.html`.

Share that one link with your IT team. It works on phone + PC, installs as an app,
and still works offline (service worker caches all files including `penafrancia.png`).


## PART B — Shared online database (so all IT see the same reports)

Right now reports save in `localStorage` = per phone/PC only.
I already added code in the app: **"Online shared storage"** card with
Connect / Sync now / Disconnect using Firebase Realtime Database (free, no server).

Do this once (5 minutes, free):

1. Go to https://console.firebase.google.com → Add project (e.g. `it-service-report`)
   - Disable Google Analytics if asked (simpler).
2. Left menu **Build → Realtime Database → Create Database**
   - Location: `asia-southeast1` (closest to PH) → Start in **test mode**.
3. Copy the database URL, looks like:
   `https://it-service-report-default-rtdb.asia-southeast1.firebasedatabase.app`
4. Open your online site → login → find **"Online shared storage"** card
   → paste that URL → **Connect shared storage** → **Sync now**.
5. Every team member opens the same link and pastes the SAME URL once → Connect.
   From then on every Submit saves both on-device AND online. Saved reports list
   merges team reports automatically.

### Lock it later (recommended after testing)

Test mode allows anyone with the URL to read/write for 30 days.
For a small internal IT team that is OK to start. Later change Rules to:

```json
{
  "rules": {
    "reports": { ".read": true, ".write": true }
  }
}
```

There is no login on the database itself — your app's admin login
(`admin` / `admin123`) gates the UI, not the database. If you need per-user
logins + private data, tell me and I will add Firebase Authentication.

## Quick check

- [ ] `https://pcsceddieboy.github.io/ServiceReportData/` opens the login page
- [ ] Carousel shows `logoo.png` ↔ `penafrancia.png` with transparent background
- [ ] Login works, submit a test report, Print/Excel/QR work
- [ ] Paste Firebase URL on 2 devices → submit on one → Sync now on the other → both see it
