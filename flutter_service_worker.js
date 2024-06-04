'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "678e5e019a79526d0fcca5e29f6e5f78",
".git/config": "be3ccab0d018b394fe3ce7944cab09f1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0d59b688f745e9970963bb47fa687851",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9bb927f6a367c8fdbd77d3c485b61bb4",
".git/logs/refs/heads/main": "9bb927f6a367c8fdbd77d3c485b61bb4",
".git/logs/refs/remotes/web/main": "5d0f519f7ac08039cf003ce3c50283cb",
".git/objects/05/b3d8441b7f360268644b1e9670b10453bc35c9": "d5998346da019a1999b59abf735522c9",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/c9c9fb1f21811b2360e102a416579d820be481": "789d79d5aa7b804ffb38d3b1166530e7",
".git/objects/12/a7fddce72da3abc45b595c0b1baf2e80e70e58": "d2d05d7c3246a4b9a10f242d645afd92",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/b469c7e75aed48ff681c317d1002be891f67d8": "ea07b56c30c410e5ceb0551b1f4d1f1e",
".git/objects/19/c0abab10345ab79d5eb832d9bae121b34addbb": "f6a4fea672941df821712bf2df43bf43",
".git/objects/1d/541d5f273a4239de7385407c2eb75f19fadf5a": "d1db4d2f406564a996db121ca0a9d306",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/c562d729b2253d93f97529dd97fbb9ada6e32a": "f3bb2d678cfd703e4122748e9360967f",
".git/objects/27/c258b4b5860e2bde30a02d4203cb20b9d263d4": "babf9830315ffaf02b839aa779f9d1ef",
".git/objects/2d/e06b6e1e040ca55f8746ca40b85182994a1fec": "3c3f40fe839136923bd57a2a2ce25033",
".git/objects/31/d2aeca2cd6d97e8fb5b52e52f82db54f18e3d8": "8e78160c99a6db4d8943432d2cd410da",
".git/objects/33/bacfca84bab7c18caefc17c7c10d59f878cb77": "b1f5439f5960ddca8d7d49f68b006d30",
".git/objects/40/f18c28b7ef360e66f99e6ffb2ee91fd46186ec": "55fd3918a70c4b884da92387edb835bc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/67c6dfcd87959c1b5a7f0b49341e2c431a186f": "f57a3677c2becf426628a9e91f31e67a",
".git/objects/55/6e563cce6467ee2507d4a3be6255dec513976e": "bdb710d7257c204d4965b65f1e789140",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5d/b1b6997b76243db52222b39f0525a3647adb82": "4cf3acad57d5d0b02f9acebe81fbbd96",
".git/objects/62/d9b0cfe979f79ab2039610463400f184127b37": "66eb3ceb492026192ea5d7fdc3c636eb",
".git/objects/63/ea0fe01d2c218e9936e824640200b6496db39a": "b6917168f55a92f73be13429aa07fb38",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7f/be4f4384e58c3aabaca0cabfa51de16a20f53c": "db60ca0412358a562b27c1add5e07c55",
".git/objects/8c/644c9f4afb7ab45f3d97c1c451451e1aa597ae": "4d818a36a22b87a1dc75c154e7720a94",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/98/6be0840aeb4d3acaceeceb06758356f740a4db": "4781af0529c0155770a4266b7c0397b2",
".git/objects/9e/6d61bf7e96d985f347e0c692664e1d43021e82": "c236e9e0c1a7c7fab6af7fff5e1c4b33",
".git/objects/ad/410ecbfdec07141ffde3e8951edac42c6db9e9": "40cd15dd3e61f9f51f9384854c8d17d6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/1a64dd66afe07207e8bd633a70659c3f8a44dd": "aa4d36126aa97424da7b4f685cfcca3b",
".git/objects/b3/92596e965c52f4b9d8f467f5f1b598ef7390a3": "6e15e2790a7685a6355dccc91cd8190a",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/d0/faf501dd734e60683b6558ee8f815ca1913e0c": "73c6a3059609a4ae3e4217a01242c58f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/df/28c0e5201a19a16fee6400265575b4743ec303": "099cbf062284a9bde1c51ec4f38bb78a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/630804fbb9e7fa471b76b8a0203e77e39f0f35": "df84993844f8ee057861857b0c4667e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/16ed95efa1ef1ed7b623a102861ea27194d3c4": "56e60cb7dfbdce55be662f9613c7fffa",
".git/refs/heads/main": "884c5c0512b5af7404407f86c2b0f8d4",
".git/refs/remotes/web/main": "884c5c0512b5af7404407f86c2b0f8d4",
"assets/AssetManifest.bin": "6c1987071dc3d92909a460852ff449fd",
"assets/AssetManifest.bin.json": "54fec3530ac1814670f059585f7313a2",
"assets/AssetManifest.json": "8611294de22922dc063105a8389184c6",
"assets/assets/AssetManifest.bin": "db225ef178a4a9462243445f63c39a05",
"assets/assets/AssetManifest.bin.json": "1e62f2bc72a0d7cc1157eb95877aa427",
"assets/assets/AssetManifest.json": "800c52bed92b9df665270660ce517135",
"assets/assets/cargos.xlsx": "0b33fb2043786b23f691d73eee0b9781",
"assets/assets/correos.xlsx": "405c5a49ab97678968b46a785f9ae09b",
"assets/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/assets/images/LogoCyMA.png": "ecd03c0b43e40ce9b4456d225ac8a790",
"assets/assets/NOTICES": "f591b22d2cbd58811ab30fbe8ca50e4f",
"assets/assets/parametros.xlsx": "a231ccc2951e6917253cb3ada7a21c92",
"assets/assets/prof.xlsx": "852098ec5478a0ceda8cae83a0e1f4df",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "a89cd43baef9b925cab12c1d2a61a24c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "d5a44c95b344cc5a61e2664e2188daa9",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "c382895a0b0a75872f0c4b313ed0af35",
"icons/Icon-512.png": "6e1fd9b128b2bda912c427ef1405ca12",
"icons/Icon-maskable-192.png": "c382895a0b0a75872f0c4b313ed0af35",
"icons/Icon-maskable-512.png": "6e1fd9b128b2bda912c427ef1405ca12",
"index.html": "b8cd286c1675ac5f2650a548334807d5",
"/": "b8cd286c1675ac5f2650a548334807d5",
"main.dart.js": "c6032d474d39c2c8200122ca89f8d510",
"manifest.json": "4ec450d09bf400b815161bbba43670c8",
"README.md": "e948747be145a94ef76d481861ca75f0",
"version.json": "816d3d59e4c330071fdde0507ec1791d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
