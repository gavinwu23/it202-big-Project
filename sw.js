importScripts('/it202-project2/cache-polyfill.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('mmovie').then(function(cache) {
     return cache.addAll([
       '/it202-bigProject',
       '/it202-bigProject/index.html',
       "/it202-bigProject/page_content/about.html",
       "/it202-bigProject/page_content/home.html",
       "/it202-bigProject/page_content/library.html",
       "/it202-bigProject/page_content/picture.html",
       "/it202-bigProject/page_content/weather.html",
       "/it202-bigProject/images/beijing.jpeg",
       "/it202-bigProject/images/camera.jpg",
       "/it202-bigProject/images/city.jpeg",
       "/it202-bigProject/images/dubai.jpg",
       "/it202-bigProject/images/library.jpg",
       "/it202-bigProject/images/library2.jpg",
       "/it202-bigProject/images/losAngles.jpg",
       "/it202-bigProject/images/paris.jpeg",
       "/it202-bigProject/images/sun.jpg",
       "/it202-bigProject/images/weather.jpg",
       "/it202-bigProject/images/ww.png"
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
