self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('animogle-cache').then(cache => {
      return cache.addAll([
        '/index.html',
        '/manifest.json',
        '/play-logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});