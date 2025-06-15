const CACHE_NAME = "goat-drop-cache-v1",
      ASSETS = [
        "./","./index.html","./style.min.css","./main.min.js",
        "./manifest.json","./service-worker.js",
        "./assets/goat.png","./assets/level1-bg.png",
        "./assets/level2-bg.png","./assets/level3-bg.png",
        "./assets/music1.mp3","./assets/music2.mp3","./assets/music3.mp3"
      ];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
