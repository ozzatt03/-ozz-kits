var CACHE = 'ozz-cache-v11';
var urlsToCache = [
    '.',
    'index.html',
    'style.css',
    'products.js',
    'logo.png',
    'img/icons/icon-192x192.png',
    'img/icons/icon-512x512.png'
];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE).then(function(cache) {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response) return response;
            return fetch(e.request).then(function(netResponse) {
                if (netResponse && netResponse.status === 200) {
                    var clone = netResponse.clone();
                    caches.open(CACHE).then(function(cache) {
                        cache.put(e.request, clone);
                    });
                }
                return netResponse;
            });
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys.map(function(k) {
                if (k !== CACHE) return caches.delete(k);
            }));
        })
    );
});
