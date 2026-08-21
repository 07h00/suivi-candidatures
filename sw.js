self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('pwa-v1').then((cache) => cache.addAll(['/'])));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});