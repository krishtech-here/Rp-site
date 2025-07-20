self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('rice-cache').then(cache => {
      return cache.addAll([
        '/ricemakers.html',
        '/css/styles.css', // if used
        '/js/script.js',   // if used
        '/icons/icon-192.png',
        '/icons/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
