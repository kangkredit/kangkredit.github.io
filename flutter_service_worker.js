'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "b17b1d54e82351d4370f12edc927a2ec",
"/": "b17b1d54e82351d4370f12edc927a2ec",
"main.dart.js": "e9951553640947efbe4b2f9ded122aca",
"favicon.png": "fff746e2755d9485054d3e2ce1af6920",
"icons/Icon-192.png": "76aa2c2d9d04381a94e5c5e471c97506",
"icons/Icon-512.png": "7348f30bb7e8a4d386074c08eadbc1f5",
"manifest.json": "6a12ceada7db58a57fb53cb81d413c88",
"assets/LICENSE": "2a1ee238cfef41b71145f1ffc74edb0a",
"assets/AssetManifest.json": "a3f1c570d2a8c0f9929a574f2838e0a8",
"assets/public/assets/assets/blank.png": "0b4313c4df592f4767059dcbf53936c8",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/blank.png": "0b4313c4df592f4767059dcbf53936c8"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
