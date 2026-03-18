/*
================================================================================
This Area Of Code Is: Service Worker Configuration
Explanation: I configured a cache-first strategy service worker that stores core assets for offline use and serves fallback content when network is unavailable.
In Other Words: This saves the app so it works without internet.
================================================================================
*/

const CACHE_NAME = 'getwell-v1.0';
const STATIC_ASSETS = [
    '../index.html',
    './app.html',
    './app.js',
    './styles.css',
    '../manifest.json'
];

// Install - Cache static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .catch(err => console.log('Cache failed:', err))
    );
    self.skipWaiting();
});

// Activate - Clean old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(name => name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            );
        })
    );
    self.clients.claim();
});

// Fetch - Cache first strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .catch(() => {
                        // Return index.html for navigation requests when offline
                        if (event.request.mode === 'navigate') {
                            return caches.match('../index.html');
                        }
                    });
            })
    );
});
