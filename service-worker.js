const CACHE_NAME = "mineral-evolution-v4";
const ASSETS = [
  "./",
  "./index.html",
  "./synthesis.html",
  "./lab-tools.html",
  "./analysis-templates.html",
  "./manifest.json",
  "./icons/icon.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
