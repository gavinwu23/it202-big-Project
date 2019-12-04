importScripts('/it202-big-Project/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mmovie').then(function(cache) {
     return cache.addAll([
       '/it202-big-Project',
       '/it202-big-Project/index.html',
       "/it202-big-Project/page_content/about.html",
       "/it202-big-Project/page_content/home.html",
       "/it202-big-Project/page_content/library.html",
       "/it202-big-Project/page_content/picture.html",
       "/it202-big-Project/page_content/weather.html",
       "/it202-big-Project/images/beijing.jpeg",
       "/it202-big-Project/images/camera.jpg",
       "/it202-big-Project/images/city.jpeg",
       "/it202-big-Project/images/dubai.jpg",
       "/it202-big-Project/images/library.jpg",
       "/it202-big-Project/images/library2.jpg",
       "/it202-big-Project/images/losAngles.jpg",
       "/it202-big-Project/images/paris.jpeg",
       "/it202-big-Project/images/sun.jpg",
       "/it202-big-Project/images/weather.jpg",
       "/it202-big-Project/images/ww.png"
     ]);
   })
 );
});


self.addEventListener('fetch', function(event) {
 console.log(event.request.url);

 event.respondWith(
   caches.match(event.request).then(function(response) {
     return response || fetch(event.request);
   })
 );
});
