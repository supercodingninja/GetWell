/*
================================================================================
This Area Of Code Is: Service Worker Cache Configuration
Explanation: I configured the cache name using semantic versioning and defined the static assets array with GitHub Pages path structure (/GetWell/) to ensure proper caching for this repository deployment.
In Other Words: This names the cache and lists files to save for offline use.
================================================================================
*/

const CACHE_NAME = 'getwell-cache-v1.0.0-encrypted';
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
Explanation: I implemented the install event listener that opens the cache, adds all essential files for offline functionality, and forces immediate activation using skipWaiting() to ensure updates apply without waiting for tab closure.
In Other Words: This saves files when someone first visits the site.
================================================================================
*/

self.addEventListener('install', (event) => {
    console.log('[SW] Installing version:', CACHE_NAME);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Cache opened');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('[SW] All files cached');
                return self.skipWaiting();
            })
            .catch((err) => {
                console.error('[SW] Cache failed:', err);
            })
    );
});

/*
================================================================================
This Area Of Code Is: Fetch Interceptor with Cache-First Strategy
Explanation: I created a fetch handler that checks cache first for instant response, falls back to network if not cached, and returns index.html as fallback for navigation requests to support SPA behavior when offline.
In Other Words: This shows saved files first, downloads new ones if needed, or shows homepage if offline.
================================================================================
*/

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return response;
                }
                
                return fetch(event.request)
                    .then((networkResponse) => {
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }
                        
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME).then((cache) => {
                            cache.put(event.request, responseToCache);
                        });
                        
                        return networkResponse;
                    });
            })
            .catch(() => {
                if (event.request.mode === 'navigate') {
                    console.log('[SW] Offline fallback');
                    return caches.match('/GetWell/index.html');
                }
            })
    );
});

/*
================================================================================
This Area Of Code Is: Activation and Cache Cleanup Handler
Explanation: I implemented the activate event to delete obsolete caches from previous versions and claim all clients immediately for instant update application without page refresh.
In Other Words: This deletes old files and takes control of all windows immediately.
================================================================================
*/

self.addEventListener('activate', (event) => {
    console.log('[SW] Activating version:', CACHE_NAME);
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('[SW] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            return self.clients.claim();
        })
    );
});
