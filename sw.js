const CACHE = 'it-report-v3';
const ASSETS = ['./', './index.html', './IT_Service_Report_App.html', './manifest.webmanifest', './logo.png', './logoo.png', './penafrancia.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  // HTML pages: network first so updates land immediately, fall back to cache offline
  if (e.request.mode === 'navigate' || /\.html?($|\?)/i.test(url.pathname)) {
    e.respondWith(
      fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
    return;
  }
  // Other assets: cache first, refresh in background
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => {
      const go = fetch(e.request).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => hit);
      return hit || go;
    })
  );
});
