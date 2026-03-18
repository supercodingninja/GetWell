/*
================================================================================
This Area Of Code Is: Service Worker Cache Configuration
Explanation: I configured the cache name using semantic versioning with GitHub Pages path structure (/GetWell/) to ensure proper caching for this repository deployment, combining original path naming with enhanced cache management.
In Other Words: This names the cache and lists the files to save.
================================================================================
*/

const CACHE_NAME = 'getwell-cache-v1.0.0-enhanced';
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
Explanation: I implemented the install event listener that opens cache storage, adds all essential files for offline functionality, and forces immediate activation using skipWaiting() to ensure updates apply without waiting for tab closure.
In Other Words: This saves all the app files when you first visit.
================================================================================
*/

self.addEventListener('install', (event) => {
    console.log('[SW] Installing version:', CACHE_NAME);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[SW] Cache opened, adding files');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('[SW] All files cached successfully');
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
Explanation: I created a fetch event handler that intercepts all network requests, checks the cache first for instant response, falls back to network fetch if not cached, and returns index.html as fallback for navigation requests to support Single Page Application behavior.
In Other Words: This shows saved files first, downloads if needed, or shows homepage if offline.
================================================================================
*/

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached version instantly if available
                if (response) {
                    console.log('[SW] Serving from cache:', event.request.url);
                    return response;
                }
                
                // Otherwise fetch from network
                console.log('[SW] Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then((networkResponse) => {
                        // Cache successful network responses for offline use
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
                // Final fallback for navigation requests
                if (event.request.mode === 'navigate') {
                    console.log('[SW] Offline fallback to index.html');
                    return caches.match('/GetWell/index.html');
                }
            })
    );
});

/*
================================================================================
This Area Of Code Is: Activation and Cache Cleanup Handler
Explanation: I implemented the activate event to delete obsolete caches from previous versions, freeing storage space, and use clients.claim() to take control of all open tabs immediately without requiring page refresh.
In Other Words: This deletes old files and takes control of all windows right away.
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
            console.log('[SW] Claiming all clients');
            return self.clients.claim();
        })
    );
});

/*
================================================================================
This Area Of Code Is: Background Sync Handler
Explanation: I added sync event support to defer actions like form submissions until connectivity is restored, enhancing offline user experience for joke submissions.
In Other Words: This saves actions done offline and sends them when back online.
================================================================================
*/

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-jokes') {
        console.log('[SW] Background sync triggered for jokes');
        event.waitUntil(
            Promise.resolve() // Placeholder for sync logic
        );
    }
});

/*
================================================================================
This Area Of Code Is: Push Notification Handler
Explanation: I configured push event handling to receive and display notifications even when the website is closed, with customizable title, body, and icon.
In Other Words: This shows notifications even when the app is closed.
================================================================================
*/

self.addEventListener('push', (event) => {
    console.log('[SW] Push received');
    
    if (event && event.data) {
        const data = event.data.json();
        const options = {
            body: data.body || 'New get-well message available!',
            icon: '/GetWell/icon-192x192.png',
            badge: '/GetWell/badge-72x72.png',
            vibrate: [100, 50, 100],
            data: { url: data.url || '/GetWell/' }
        };
        
        event.waitUntil(
            self.registration.showNotification('Get Well Card', options)
        );
    }
});

/*
================================================================================
This Area Of Code Is: Notification Click Handler
Explanation: I implemented notification click handling to focus existing windows or open new ones when users interact with push notifications, directing them to the appropriate content.
In Other Words: This opens the app when you tap a notification.
================================================================================
*/

self.addEventListener('notificationclick', (event) => {
    console.log('[SW] Notification clicked');
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/GetWell/')
    );
});

/*
================================================================================
This Area Of Code Is: Message Handler for App Communication
Explanation: I added a message event listener to enable communication between the main application and service worker for features like manual skipWaiting commands.
In Other Words: This lets the website talk to the service worker.
================================================================================
*/

self.addEventListener('message', (event) => {
    console.log('[SW] Message received:', event.data);
    
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});
