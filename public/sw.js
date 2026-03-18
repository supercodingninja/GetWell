/*
================================================================================
This Area Of Code Is: Service Worker (PWA Offline Support)
Explanation: This script runs in the background and enables offline functionality.
It caches the app files so users can still view jokes without internet. Also
handles push notifications and background sync if added later.
In Other Words: The behind-the-scenes worker that saves the app to your phone
so it works without internet.
================================================================================
*/

/*
This Area Of Code Is: Cache Configuration
Explanation: Defines the cache name (versioned) and which files to cache for
offline use. These are the core files needed to run the app.
In Other Words: The list of files to save for offline use.
*/
const CACHE_NAME = 'getwell-cache-v1';
const urlsToCache = [
    '/GetWell/',
    '/GetWell/index.html',
    '/GetWell/public/app.html',
    '/GetWell/public/styles.css',
    '/GetWell/public/app.js',
    '/GetWell/manifest.json'
];

/*
This Area Of Code Is: Install Event Handler
Explanation: Runs when the service worker is first installed. Opens the cache
and adds all core files to it. This happens when the user first visits the page.
In Other Words: When the app is first added, save all the files to the phone.
*/
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Cache opened');
                return cache.addAll(urlsToCache);
            })
            .catch((err) => {
                console.error('Cache failed:', err);
            })
    );
    
    // Activate immediately
    self.skipWaiting();
});

/*
This Area Of Code Is: Fetch Event Handler
Explanation: Intercepts all network requests. First tries to serve from cache
(offline), then falls back to network if not in cache. This enables offline use.
In Other Words: When the app asks for a file, give the saved version first.
If not saved, try to download it.
*/
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version or fetch from network
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
            .catch(() => {
                // If both fail, return offline fallback
                if (event.request.mode === 'navigate') {
                    return caches.match('/GetWell/index.html');
                }
            })
    );
});

/*
This Area Of Code Is: Activate Event Handler
Explanation: Runs when the service worker activates. Cleans up old caches
from previous versions to save space.
In Other Words: Delete old saved files when updating to a new version.
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
    
    // Take control of all clients immediately
    self.clients.claim();
});
