/*
================================================================================
This Area Of Code Is: Service Worker (PWA Offline Support)
Explanation: I created this service worker script to enable Progressive Web 
App functionality. It runs in the background separate from the web page and 
handles caching the app's files so users can view content even without an 
internet connection once they've visited the site at least once.
In Other Words: This is a behind-the-scenes helper that saves the app to your 
phone so it works even when you're offline or have bad signal.
================================================================================
*/

/*
================================================================================
This Area Of Code Is: Cache Configuration Constants
Explanation: I defined the cache name (versioned as 'getwell-cache-v1' so I 
can update it easily later) and an array of URLs that must be cached for the 
app to function offline. These are the core HTML, CSS, and JS files.
In Other Words: This is the list of files I need to save for offline use, 
like the blueprints of the app.
================================================================================
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
================================================================================
This Area Of Code Is: Service Worker Installation Handler
Explanation: I set up an event listener for the 'install' event that fires 
when the service worker is first registered. It opens the cache storage, 
adds all the essential files to it, and forces immediate activation with 
skipWaiting(). If caching fails, it logs the error but doesn't break the app.
In Other Words: When you first visit the site, this saves all the important 
files to your phone's storage so the app works without internet later.
================================================================================
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
    
    // Activate immediately without waiting for tabs to close
    self.skipWaiting();
});

/*
================================================================================
This Area Of Code Is: Fetch Interceptor (Cache-First Strategy)
Explanation: I implemented a fetch event listener that intercepts all network 
requests. It first checks the cache for a matching request; if found, it 
returns the cached version instantly. If not in cache, it fetches from the 
network. If both fail, it returns the index.html as a fallback for navigation 
requests (SPA behavior).
In Other Words: When the app asks for a file, I first check if I already 
saved it; if yes, I use that immediately. If not, I try to download it. If 
that fails too, I show the main page.
================================================================================
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
                // If both fail, return offline fallback for navigation requests
                if (event.request.mode === 'navigate') {
                    return caches.match('/GetWell/index.html');
                }
            })
    );
});

/*
================================================================================
This Area Of Code Is: Activation & Cache Cleanup Handler
Explanation: I added an 'activate' event listener that runs when the service 
worker becomes active. It deletes old caches from previous versions to save 
storage space on the user's device. clients.claim() ensures the service worker 
takes control of all clients (tabs) immediately.
In Other Words: This cleans up old saved files when updating to a new version 
and makes sure the new version controls all open windows right away.
================================================================================
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
