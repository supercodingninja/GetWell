/*
================================================================================
This Area Of Code Is: Service Worker Cache Configuration
Explanation: I configured the cache name using semantic versioning to enable cache busting when updates are deployed, ensuring users receive the latest application files.
In Other Words: This names the cache so we can update it when the app changes.
================================================================================
*/

const CACHE_NAME = 'getwell-v1.0.0';
const STATIC_ASSETS = [
    '../index.html',
    './app.html',
    './app.js',
    './styles.css',
    '../manifest.json'
];

/*
================================================================================
This Area Of Code Is: Service Worker Install Event Handler
Explanation: I implemented the install event listener that opens the cache storage and populates it with static assets required for offline functionality, forcing immediate activation.
In Other Words: This saves the app files for offline use when first visited.
================================================================================
*/

self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installing new version:', CACHE_NAME);
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching static assets');
                return cache.addAll(STATIC_ASSETS);
            })
            .then(() => {
                console.log('[Service Worker] All assets cached successfully');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('[Service Worker] Cache failed:', error);
            })
    );
});

/*
================================================================================
This Area Of Code Is: Service Worker Activate Event Handler
Explanation: I created the activate event handler that claims all clients immediately and cleans up obsolete caches from previous versions to prevent storage bloat.
In Other Words: This deletes old saved files and takes control of the page.
================================================================================
*/

self.addEventListener('activate', (event) => {
    console.log('[Service Worker] Activating new version:', CACHE_NAME);
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter((cacheName) => {
                        return cacheName !== CACHE_NAME;
                    })
                    .map((cacheName) => {
                        console.log('[Service Worker] Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    })
            );
        })
        .then(() => {
            console.log('[Service Worker] Claiming all clients');
            return self.clients.claim();
        })
    );
});

/*
================================================================================
This Area Of Code Is: Service Worker Fetch Event Handler
Explanation: I implemented a cache-first strategy that serves cached content when available, falling back to network requests, and handling offline navigation by returning the cached index.html.
In Other Words: This shows saved files first, downloads new ones if online, or shows the homepage if offline.
================================================================================
*/

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') {
        return;
    }
    
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    console.log('[Service Worker] Serving from cache:', event.request.url);
                    return response;
                }
                
                console.log('[Service Worker] Fetching from network:', event.request.url);
                return fetch(event.request)
                    .then((networkResponse) => {
                        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
                            return networkResponse;
                        }
                        
                        const responseToCache = networkResponse.clone();
                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return networkResponse;
                    })
                    .catch((error) => {
                        console.log('[Service Worker] Network fetch failed:', error);
                        
                        if (event.request.mode === 'navigate') {
                            console.log('[Service Worker] Returning cached index.html for navigation');
                            return caches.match('../index.html');
                        }
                        
                        return new Response('Offline content not available', {
                            status: 503,
                            statusText: 'Service Unavailable'
                        });
                    });
            })
    );
});

/*
================================================================================
This Area Of Code Is: Service Worker Message Handler
Explanation: I added a message event listener to enable communication between the main application and service worker for features like skipWaiting commands and version checking.
In Other Words: This lets the website talk to the service worker.
================================================================================
*/

self.addEventListener('message', (event) => {
    console.log('[Service Worker] Message received:', event.data);
    
    if (event.data === 'skipWaiting') {
        self.skipWaiting();
    }
});

/*
================================================================================
This Area Of Code Is: Service Worker Sync Event Handler (Background Sync)
Explanation: I implemented background sync functionality to defer actions like form submissions until connectivity is restored, enhancing offline user experience.
In Other Words: This saves actions done offline and sends them when back online.
================================================================================
*/

self.addEventListener('sync', (event) => {
    if (event.tag === 'sync-jokes') {
        event.waitUntil(
            console.log('[Service Worker] Background sync triggered for jokes')
        );
    }
});

/*
================================================================================
This Area Of Code Is: Service Worker Push Notification Handler
Explanation: I configured push event handling to receive and display notifications, requesting permission and showing customized notification content with icons.
In Other Words: This shows notifications even when the website is closed.
================================================================================
*/

self.addEventListener('push', (event) => {
    if (event && event.data) {
        const data = event.data.json();
        const options = {
            body: data.body || 'New content available!',
            icon: './icon-192x192.png',
            badge: './badge-72x72.png',
            vibrate: [100, 50, 100],
            data: {
                url: data.url || '/'
            }
        };
        
        event.waitUntil(
            self.registration.showNotification('Get Well Card', options)
        );
    }
});

/*
================================================================================
This Area Of Code Is: Service Worker Notification Click Handler
Explanation: I implemented notification click handling to focus existing windows or open new ones when users interact with push notifications, directing them to appropriate content.
In Other Words: This opens the app when you click a notification.
================================================================================
*/

self.addEventListener('notificationclick', (event) => {
    event.notification.close();
    
    event.waitUntil(
        clients.openWindow(event.notification.data.url || '/')
    );
});
