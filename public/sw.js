/*
================================================================================
This Area Of Code Is: Service Worker (PWA Offline Support)
Explanation: A background script that enables offline functionality. Caches 
the app shell (HTML, CSS, JS) and videos so the app works without internet 
after first load. Intercepts network requests and serves from cache when offline.
In Other Words: The behind-the-scenes helper that saves the app to the phone 
so it works even without WiFi (like a downloaded app).
================================================================================
*/

/*
This Area Of Code Is: Cache Configuration
Explanation: Name of the cache storage and list of essential files to cache 
for offline use.
In Other Words: The list of files to save for offline mode.
*/
const CACHE_NAME = 'getwell-church-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/manifest.json',
    'https://cdn.tailwindcss.com'
];

/*
This Area Of Code Is: Install Event Listener
Explanation: Runs when the service worker installs. Opens the cache and adds 
all essential files. Also caches the video files if possible.
In Other Words: When the app is first installed, save all the important files 
to the phone's storage.
*/
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache);
            })
            .catch((err) => console.log('Cache install failed:', err))
    );
    self.skipWaiting();
});

/*
This Area Of Code Is: Fetch Event Listener
Explanation: Intercepts all network requests. If the request is in cache, 
returns the cached version (faster, works offline). If not, fetches from 
network and caches the result.
In Other Words: When the app asks for a file, first check if we have it saved 
locally. If yes, use the saved copy. If no, get it from the internet and save 
it for later.
*/
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached or fetch new
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then((response) => {
                        // Don't cache if not valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        // Clone and cache the response
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    });
            })
    );
});

/*
This Area Of Code Is: Activate Event Listener
Explanation: Cleans up old caches when the service worker updates to a new 
version.
In Other Words: Delete old saved files when updating the app to a new version.
*/
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
