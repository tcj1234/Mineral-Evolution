const CACHE_NAME = "mineral-evolution-v6";
const ASSETS = [
  "./",
  "./index.html",
  "./synthesis.html",
  "./lab-tools.html",
  "./analysis-templates.html",
  "./phenol-birnessite.html",
  "./data-fitting.html",
  "./experiment-designer.html",
  "./transformation-map.html",
  "./paper-writer.html",
  "./figure-planner.html",
  "./manifest.json",
  "./icons/icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
