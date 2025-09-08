const CACHE_NAME = 'site-cache-v1';
const ASSETS = [
  '/', '/index.html', '/over.html', '/projecten.html', '/contact.html',
  '/assets/css/style.css', '/assets/js/main.js', '/assets/img/placeholder.png',
  '/assets/img/favicon.svg'
];
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)));
});
self.addEventListener('activate', (e)=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(caches.match(e.request).then(r=> r || fetch(e.request)));
});
