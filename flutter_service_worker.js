'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "485cc4ba45c2ca7f9140d462211bf952",
"assets/AssetManifest.bin.json": "a07cbf6858f9c706f8df86b918facecd",
"assets/assets/files/countries.json": "50acf32787a6b405513cf39a1ad6c888",
"assets/assets/icons/arrow.svg": "642048e4211de501cad83808235a3ed7",
"assets/assets/icons/arrow_right_long.svg": "39d3cdb61f558787888bb72837721e91",
"assets/assets/icons/basket.svg": "76d5a5df4321226d6f378ea35d8b3d6f",
"assets/assets/icons/cart.svg": "689e6af0db9961304e358bc701cfe206",
"assets/assets/icons/close_circle.svg": "2dc0abf2a920745dad7798385b9da8b5",
"assets/assets/icons/close_square.svg": "db7eebe5e526f828318e459c65985dfe",
"assets/assets/icons/coach.svg": "97a2ad9a84a723332a6e74afe0f04390",
"assets/assets/icons/eye.svg": "c0d9b8fbe18f91bad155bba02773111f",
"assets/assets/icons/eye_closed.svg": "42b25c6f9ed50f5ec5df09f183fe4827",
"assets/assets/icons/help.svg": "b343aa51b55540ae9df571c0af0202a8",
"assets/assets/icons/home.svg": "5a6b26fe80245171eb4e6a6acd13cd1a",
"assets/assets/icons/home_1.svg": "ff50caecf01cbb5f47ccc45c6746c479",
"assets/assets/icons/list.svg": "8eb9f939d484e9fd2fa4ecedbffb1dcd",
"assets/assets/icons/logo_quiz.png": "1b70c8889a4b4e51686a28992d9461e8",
"assets/assets/icons/notification.svg": "ad02f91938914c82078109ff9df71f20",
"assets/assets/icons/person.svg": "6fb235c8629755cf6998b2ec1ef2b482",
"assets/assets/icons/profile.svg": "a6f850cd27623a558a48b4f9ee00f66a",
"assets/assets/icons/search.svg": "d3cc3d99f24f33171f8fc71a7b72b95e",
"assets/assets/icons/shopping.svg": "9754fc6979e2f5bd95644cd6ab26e1fe",
"assets/assets/icons/tick.svg": "4ee25bd3d678ece4af7f726d4907c307",
"assets/assets/icons/tournament.svg": "a9a54dfd71909b3c93ec2b90dd71fa79",
"assets/assets/icons/turf.svg": "32fe919220e6cadcfdd9172ba9ef3c1e",
"assets/assets/icons/user.svg": "17c026452dfeeccb77bd80f2d291fd72",
"assets/assets/images/download.png": "6c3a9b6ea3f1e4c7711682eb391bd5b2",
"assets/assets/images/download1.png": "f749b61d42abf6e3988cc699afa5b4c0",
"assets/assets/images/error_char_1.svg": "bd7e5840bb1b8073f85ddf2ff8b75505",
"assets/assets/images/error_char_2.svg": "b9561efc56d9f86a2f580c0636518c55",
"assets/assets/images/no_data.svg": "b3af295d899522df256ca5f8dc5d2f28",
"assets/assets/images/player_adda.png": "76e17fd68506de1fcf8036c87c65e5a9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "9c6c983614df92aee33ca1084f56fd6e",
"assets/NOTICES": "86bcabf7df14420bf042bfd1eab51c79",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "bf33cc1c6225a51b07643d8d2c4b5760",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "49f911cd6276164159ca6a02319f1188",
"icons/Icon-192.png": "bc17085ca636f0b02a04afd9ec572938",
"icons/Icon-512.png": "f5ff404be1817aeeb4ed1cf4543a4dff",
"icons/Icon-maskable-192.png": "bc17085ca636f0b02a04afd9ec572938",
"icons/Icon-maskable-512.png": "f5ff404be1817aeeb4ed1cf4543a4dff",
"index.html": "2263d372bba16e9e66c4249d580c7a5d",
"/": "2263d372bba16e9e66c4249d580c7a5d",
"main.dart.js": "ad4c5eedc6bee4cd2a84e60fc0323d42",
"manifest.json": "bdcf5bada8ce74a0706d621914f72921",
"version.json": "b93b237584ce2223ded067ecf666fb13"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
