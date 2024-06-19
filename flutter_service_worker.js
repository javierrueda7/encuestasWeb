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
".git/index": "3a618a91c027450ed660cf9ad9f81f66",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8cb37d1fba4fcc0d499e8706f4a589dc",
".git/logs/refs/heads/main": "8cb37d1fba4fcc0d499e8706f4a589dc",
".git/logs/refs/remotes/web/main": "03e2164939329d1753cbbe1ed0555c32",
".git/objects/00/d6e70d57c647493503583e2d4e3e44addfd16d": "ddecae4cbe862600761b8daa539e7fb7",
".git/objects/05/b3d8441b7f360268644b1e9670b10453bc35c9": "d5998346da019a1999b59abf735522c9",
".git/objects/07/68870093ffd2556132e3293c6e32556c078bdd": "90b026d785331325759ad48fc1805642",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0a/c9c9fb1f21811b2360e102a416579d820be481": "789d79d5aa7b804ffb38d3b1166530e7",
".git/objects/10/5797a305d1688702153fd8101de90a6706ef7a": "6da7a694f31d63424d6b3d98dc62f2d8",
".git/objects/12/0b3c5bea2ce169a3e90cb8e282095ba664afe6": "4d1c772819e32088d42a9a2a64cc52ac",
".git/objects/12/a7fddce72da3abc45b595c0b1baf2e80e70e58": "d2d05d7c3246a4b9a10f242d645afd92",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/b469c7e75aed48ff681c317d1002be891f67d8": "ea07b56c30c410e5ceb0551b1f4d1f1e",
".git/objects/17/f55a0f1a22acc7ae017dc5bd77b0d327ae584c": "c085cffc78bcc0990a07960ebb1cebf4",
".git/objects/19/c0abab10345ab79d5eb832d9bae121b34addbb": "f6a4fea672941df821712bf2df43bf43",
".git/objects/1c/19ff4715b41a9bf5c8aeb9c0baaf7b7e7acb8f": "b060702bcf033a46320eb23d31df37de",
".git/objects/1d/541d5f273a4239de7385407c2eb75f19fadf5a": "d1db4d2f406564a996db121ca0a9d306",
".git/objects/1e/38f20b713c11045755e4b4c496bce8da5b25b9": "65067f436544b48d9b872475156b0063",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/9681182cf7c982a9c315edbebe59e63b87c4cd": "1269cfee5254d8309862ea0901298ef6",
".git/objects/23/c562d729b2253d93f97529dd97fbb9ada6e32a": "f3bb2d678cfd703e4122748e9360967f",
".git/objects/26/8e731e1388d4aacec3bd471760d14803f281c1": "ee1a2dac90be8802f98dfcb25bb7b87f",
".git/objects/27/c258b4b5860e2bde30a02d4203cb20b9d263d4": "babf9830315ffaf02b839aa779f9d1ef",
".git/objects/2d/e06b6e1e040ca55f8746ca40b85182994a1fec": "3c3f40fe839136923bd57a2a2ce25033",
".git/objects/31/d2aeca2cd6d97e8fb5b52e52f82db54f18e3d8": "8e78160c99a6db4d8943432d2cd410da",
".git/objects/33/bacfca84bab7c18caefc17c7c10d59f878cb77": "b1f5439f5960ddca8d7d49f68b006d30",
".git/objects/34/d417793e449e0e9fa75ff13ca68c417d2164a6": "3bf7ac03cece220dddb7d3aa494c9f07",
".git/objects/38/a55fd2cd2a19d41e8b02c89a63887d9faf759f": "07ac7d1b043f805682f2029576cef82b",
".git/objects/40/f18c28b7ef360e66f99e6ffb2ee91fd46186ec": "55fd3918a70c4b884da92387edb835bc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/43/795e386d5faa7c3cee6dc944bd46f7e885ec5f": "74b17e5e2cd093c7a1b084a244ef3711",
".git/objects/43/e008d6266f0d64b08ea616c85bcd0ee432f934": "5939b9bcb891f95ef79fd4ec054ed7c0",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/67c6dfcd87959c1b5a7f0b49341e2c431a186f": "f57a3677c2becf426628a9e91f31e67a",
".git/objects/52/eb669ad3bb001779ece606e606285339500a65": "fdb9b95b69a7137377732eb761c7f4f6",
".git/objects/53/836c79746529de29ba706cf3d46094f7ff8ebe": "b42ac58a007cb4231753d0050a20d73c",
".git/objects/55/6e563cce6467ee2507d4a3be6255dec513976e": "bdb710d7257c204d4965b65f1e789140",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/a7fe2401aacbfcc93035995c29bde567a9f0a8": "8b1c0561753dbed16f43754955dc38ff",
".git/objects/5c/08357994e1e85d78f02c8cb6e507ab65776159": "a82b70061b849dd2b6e705d8ebc690b6",
".git/objects/5d/b1b6997b76243db52222b39f0525a3647adb82": "4cf3acad57d5d0b02f9acebe81fbbd96",
".git/objects/5e/4b6189125c5691fc312974e8bfccd424443e29": "41b2a818ae3b1dbd406706ca6c6a629e",
".git/objects/5e/dffa18d5eb559adb262b73f6508cef24d511a9": "9ef18d2bfebdc53eec5a5c6c3c863203",
".git/objects/61/fb2511a6b7b5ff0dfa23bf79d28cf83864edf7": "3173e462478e7d003349af4f62aa3b43",
".git/objects/62/04e2cba4ec995b4177c87e65a673aa1b884c9d": "d763f15886af0e95be36a12c8e1d9a66",
".git/objects/62/d9b0cfe979f79ab2039610463400f184127b37": "66eb3ceb492026192ea5d7fdc3c636eb",
".git/objects/63/ea0fe01d2c218e9936e824640200b6496db39a": "b6917168f55a92f73be13429aa07fb38",
".git/objects/6b/4b99daae5752045e88c4ceb5cbfbc8bb89eddb": "20c801ab39a4b12a9eee161784429940",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/7f/be4f4384e58c3aabaca0cabfa51de16a20f53c": "db60ca0412358a562b27c1add5e07c55",
".git/objects/82/0102fdf9113e4ce096e1e490b69708b4bcfa1c": "f051d7b2bc242ecbdef9de38eb4a4395",
".git/objects/82/8a0d8d2f1bd23b615df382a298edc5659e57f2": "944ac87d9b7db4e041ecaa39975502c8",
".git/objects/83/d70c679e6cbd61749a8118c8c317f8fb064289": "17da28f6dbd3d47ee34d59a035b3448e",
".git/objects/84/9bcb0a102d636c36e5f129163e9960a0e0a265": "25edfb9eb80cf4ee0ba91eae8efe2ab7",
".git/objects/8a/b9e629946b43e6622918284c0d6b61cf6f1a24": "1f488478dd37efec6a196603dd3d7e46",
".git/objects/8c/644c9f4afb7ab45f3d97c1c451451e1aa597ae": "4d818a36a22b87a1dc75c154e7720a94",
".git/objects/8c/8ba78d220cc2c5f1f1d205badc71c5b18a53f5": "9d7c78a5020bdcd6e4e9b8b7e0a103f1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/8fa112eb058bd630e0b06f29bc11580fce2d7b": "1263408fc426279987865a136fdefc81",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/8d03be119979825deb6d634c74b355b580f543": "741aa701f98d3a188ea9e0a228c5e66e",
".git/objects/98/6be0840aeb4d3acaceeceb06758356f740a4db": "4781af0529c0155770a4266b7c0397b2",
".git/objects/9e/6d61bf7e96d985f347e0c692664e1d43021e82": "c236e9e0c1a7c7fab6af7fff5e1c4b33",
".git/objects/9e/b2f9dda1cfa85473a06cb6b17f0fe86921b475": "abd7cd07daa989cbf2ce5511d8033bd0",
".git/objects/a2/113ae0b4d62cc8c06a45cbd35861c2c19e93db": "db2839dc46b7c4dce7191d29f124883a",
".git/objects/a3/b602fcb9048ef2ce57be4ca5699472d69ccce4": "ecefaa3f91b06afceea58dc1fc642e0c",
".git/objects/a3/bf84ba07b1b62fa7b297a277f1c0127d94762e": "279e9ec8770de95dcaec23213bd54ca7",
".git/objects/a4/513f472c67a07ffca21f5fa4420f4874c7693d": "4b50b8a5ec4dea20488ca286af7843d5",
".git/objects/aa/717324e454d918ffe377430b0d050a15dddac9": "bb3b318d7a1c0e8cee5717859b04b170",
".git/objects/ad/410ecbfdec07141ffde3e8951edac42c6db9e9": "40cd15dd3e61f9f51f9384854c8d17d6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b2/1a64dd66afe07207e8bd633a70659c3f8a44dd": "aa4d36126aa97424da7b4f685cfcca3b",
".git/objects/b3/92596e965c52f4b9d8f467f5f1b598ef7390a3": "6e15e2790a7685a6355dccc91cd8190a",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/b970e28d4608f554d5c098e67c42e00ceb3989": "574b27e5adc7d9e1e18db9f12223a932",
".git/objects/b9/d05a9c811b6e76756465d0cf67bf58100d3f60": "32d8500c1bfdf89daf0e98daf9057b78",
".git/objects/bc/1d84b096fc2bdbcb9e9a6bd46600376f63efbb": "d2b63c0735a7f265ffc7b1ac1f9fdb60",
".git/objects/c1/cbac566ccf50f39cb0ecf2af3f58f74858d277": "3b4a9337e77e9b254ec4dd122c309f4c",
".git/objects/c4/459311376f9d61c60ef384c45e2c8982d615be": "aef3764e8d784e1b5fde92dd56f78578",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/cc/15de181a68d7e698eaff0bac9a76ff4bc61640": "ccc9dfde645237cf72990cfcf38548b9",
".git/objects/cf/43da283c68f8aee8ee8fc85c655ea492bd04fb": "306c7d229e4ccaa2ef60a93be3cbaae1",
".git/objects/d0/1c6dbe7d1492cb543d496ed40193da9b47db6c": "02bcdc806167ee5c08a7529183f696d6",
".git/objects/d0/faf501dd734e60683b6558ee8f815ca1913e0c": "73c6a3059609a4ae3e4217a01242c58f",
".git/objects/d2/8c4f353918cdeaeafac0544791552ef2589b19": "c7b803e0bf3e093d8287fdcb5b1c5368",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/dd/ce70136a64b37e80fdb06bbe91e6b2e3833b2b": "de19edd82ca1c68fb4a6c0972513abf0",
".git/objects/df/28c0e5201a19a16fee6400265575b4743ec303": "099cbf062284a9bde1c51ec4f38bb78a",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/630804fbb9e7fa471b76b8a0203e77e39f0f35": "df84993844f8ee057861857b0c4667e0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/16ed95efa1ef1ed7b623a102861ea27194d3c4": "56e60cb7dfbdce55be662f9613c7fffa",
".git/objects/f6/570c781137159dbdc913ca04119e8b53cd5cbe": "a24f1b100f7a29ad12c02cc7e252bf81",
".git/objects/f8/11a391162725e4eee9b1efc169b55226645913": "e129bbb4b90d84dc348b79e05b891f86",
".git/refs/heads/main": "17aae31ba12bc1c8189d2c74de582394",
".git/refs/remotes/web/main": "17aae31ba12bc1c8189d2c74de582394",
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
"assets/NOTICES": "2fea4393960f1686c9e48c2c70a3baae",
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
"index.html": "db864e0394f94ba4932a535a5b972c1f",
"/": "db864e0394f94ba4932a535a5b972c1f",
"main.dart.js": "750072f552d449e4ad133554a6851689",
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
