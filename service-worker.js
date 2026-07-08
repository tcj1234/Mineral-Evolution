const CACHE_NAME = "mineral-evolution-v2";
const ASSETS = ["./", "./index.html", "./synthesis.html", "./manifest.json", "./icons/icon.svg"];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("fetch", event => {
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
