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
".git/index": "aaceaeef6bc5e9bc9dc246baf7f7f143",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b914be7c16e2bcdfe7c3c4b663874adc",
".git/logs/refs/heads/main": "b914be7c16e2bcdfe7c3c4b663874adc",
".git/logs/refs/remotes/web/main": "712300a1951caf80454935d362bb3d6c",
".git/objects/00/d6e70d57c647493503583e2d4e3e44addfd16d": "ddecae4cbe862600761b8daa539e7fb7",
".git/objects/01/1ead9373d07d73de90d604e57c404615ac47dc": "ecaf8a2ce89c091b0b039b86da416593",
".git/objects/02/1201eb736fe2ec13ba071e73d0ca0c413e0164": "9ff8001fd812effff59c126f003d62f4",
".git/objects/05/2d96da888ac15babff55aadac341810354134a": "de1180a5aa18cd59774b267a49ee1cfe",
".git/objects/05/b3d8441b7f360268644b1e9670b10453bc35c9": "d5998346da019a1999b59abf735522c9",
".git/objects/07/68870093ffd2556132e3293c6e32556c078bdd": "90b026d785331325759ad48fc1805642",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/d3c8056b3fc5c1961e8fdbffd4b45d967f8de1": "1d1a95f645a663dae0ede8725ae9ad89",
".git/objects/0a/96d6c52943066ef7a26a4e8fdfa13f0b99ee02": "c517bf5766fa754edea00930d1328fb2",
".git/objects/0a/a1020d1a3874157d203553f2e4e96ce7e8c3e4": "52ff4d20055f3fc154f0f6677a47e502",
".git/objects/0a/c9c9fb1f21811b2360e102a416579d820be481": "789d79d5aa7b804ffb38d3b1166530e7",
".git/objects/0c/3a62ddb4fffe0ea4cd1f6f7c894fc5e3781959": "539a333b7521c06e2e5f5c2b8c21ac07",
".git/objects/0c/6dc18d81d1a64f7cad87de2bd30f6e33684fee": "5abcb7f3ebf0e281fef8f3d213beecf3",
".git/objects/10/5797a305d1688702153fd8101de90a6706ef7a": "6da7a694f31d63424d6b3d98dc62f2d8",
".git/objects/10/9e0a97ee0cd1db46c66733f8228bdbe0bf7f56": "f4ebfc1473cc77141e8a72d2a53cef82",
".git/objects/11/1364c4ac256312d326b067c57e73b9212a1d11": "95081a118bf19e2a5c6639c518ea3431",
".git/objects/11/b9c2149eb29345cbee89cf855753dfecfe3694": "cd129b2813c533bdcc8182f8fdb6487f",
".git/objects/12/0623e5c97533fea3c448ea967d5dd10cc8b6f3": "a10cd0e2ffb85b54e0293d931d03a380",
".git/objects/12/0b3c5bea2ce169a3e90cb8e282095ba664afe6": "4d1c772819e32088d42a9a2a64cc52ac",
".git/objects/12/a7fddce72da3abc45b595c0b1baf2e80e70e58": "d2d05d7c3246a4b9a10f242d645afd92",
".git/objects/13/0fa3818601279637d916dd8de2e19355cd38f3": "02fb6b3f3a7010afa2285b1068d5e495",
".git/objects/15/b540d7722eeb4415d58b1ff8de8348e279bc1b": "dde244e4aea24ca96bc152f3df4755ef",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/1998007dc582c80a6d4b9a5243185c47f627f3": "2e36e2b04ef47cbdc3a63520fcbb3d4a",
".git/objects/17/8ea8099a2bd3aec06fde00e6b5c5c1b59c3743": "ad87a5d739026f0ecdc8299dfd7124aa",
".git/objects/17/b469c7e75aed48ff681c317d1002be891f67d8": "ea07b56c30c410e5ceb0551b1f4d1f1e",
".git/objects/17/f55a0f1a22acc7ae017dc5bd77b0d327ae584c": "c085cffc78bcc0990a07960ebb1cebf4",
".git/objects/19/c0abab10345ab79d5eb832d9bae121b34addbb": "f6a4fea672941df821712bf2df43bf43",
".git/objects/1b/7aa52b6fa1dc95862ff71c2e2d4a527e72f5a2": "8ca1f8bd9b47faf32edad033ea3e44bc",
".git/objects/1b/8a7a0186207b8009cc67ed35db12bcd6ba0f7b": "7637f6a319010da057648300f78c59e6",
".git/objects/1c/19ff4715b41a9bf5c8aeb9c0baaf7b7e7acb8f": "b060702bcf033a46320eb23d31df37de",
".git/objects/1d/541d5f273a4239de7385407c2eb75f19fadf5a": "d1db4d2f406564a996db121ca0a9d306",
".git/objects/1e/38f20b713c11045755e4b4c496bce8da5b25b9": "65067f436544b48d9b872475156b0063",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/10fd06e04b8a2139a3cc8eabf1f53044129f23": "8d10ec18e85afd1a32ffb49c031673b0",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/6759dd050fa56d9bdf6c6a6c7772c863869f77": "4dc0383c167c31409462c7daf984a131",
".git/objects/21/a20f8766a6ce275c0a99de98383efb10e36ef1": "914c7ebdb6c64ae6173163c8be8d26d5",
".git/objects/23/9681182cf7c982a9c315edbebe59e63b87c4cd": "1269cfee5254d8309862ea0901298ef6",
".git/objects/23/c562d729b2253d93f97529dd97fbb9ada6e32a": "f3bb2d678cfd703e4122748e9360967f",
".git/objects/24/861d747523c95cbe15ec7535afc5568d8247e2": "166114ff4301bf40ff824e6aadaf096e",
".git/objects/24/b7e0cb1e77987630e8be905a14c08fccf13b37": "8ef6c2b0623ebe51643438422d32b5a9",
".git/objects/24/fd5ed55814339a31bcc3350bbda3b56b2fece3": "6272237eebb9e9db84a47cd64f07f64d",
".git/objects/25/189c906737c27d92035f7f486af14da27a0420": "3ed0103ad386be49c621105c65a15915",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/e38ce7de3af2cdf3cb19c2e177ce2ac612d244": "62254d60e3be6059401ef0a224408134",
".git/objects/26/8e731e1388d4aacec3bd471760d14803f281c1": "ee1a2dac90be8802f98dfcb25bb7b87f",
".git/objects/27/c258b4b5860e2bde30a02d4203cb20b9d263d4": "babf9830315ffaf02b839aa779f9d1ef",
".git/objects/28/8a8f6209e82c09b285dcb292ba4de3cb9b93c1": "cc442890a9a7b76a8b9268f7a06fd528",
".git/objects/2a/73ea5a0ef3f4a7fa77a12e99afbc782307b36f": "18345ab28614d6355b2f249cf8ad4a5b",
".git/objects/2a/df0e4090569169881a2c4db6f7227d255855f8": "dc6add64cfa54c07e143465a9c0ba2bb",
".git/objects/2c/a363fad2a84c4cad9faea7e7be88816f440eef": "62809cadc057eed2bef88b83b197b798",
".git/objects/2c/bcb8ce7ec78fd87b1d5ce3b858dfc995572a52": "454b0d4bf0bf1dd10585e5be2b467a52",
".git/objects/2d/e06b6e1e040ca55f8746ca40b85182994a1fec": "3c3f40fe839136923bd57a2a2ce25033",
".git/objects/2e/6d26e1a6c1c421ca39e1c8236bc331809430c9": "3c48439af5ca029176dcf07874c4b566",
".git/objects/2e/b360ff89ed56607255b1e822171195301098f0": "b1eabd43c4397850759248b24ebb2816",
".git/objects/2f/47580eafc08b3687081090a84fb60d18444b49": "00224aa5a97e96c36d12df56020bdf85",
".git/objects/30/a28b95c525932cb8b74b4e5805652218fbdc30": "85e542dffd32f36dc3b7512dc5119fc5",
".git/objects/31/2f514e7676b2e56a4ffbb9698e7ddf7ac8ac94": "7910607178cd2b6f118c82cf656331d9",
".git/objects/31/8104499fa65ed997daca31ea6f370ec4c7de44": "8f7cbb5eef1e2770b71441aef73f6a29",
".git/objects/31/d2aeca2cd6d97e8fb5b52e52f82db54f18e3d8": "8e78160c99a6db4d8943432d2cd410da",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/bacfca84bab7c18caefc17c7c10d59f878cb77": "b1f5439f5960ddca8d7d49f68b006d30",
".git/objects/34/2efc283233e06c154aeeaf2b81ac8a8d0bb0ac": "341d0fbd11804f43f2d84f8e69bac8e6",
".git/objects/34/d417793e449e0e9fa75ff13ca68c417d2164a6": "3bf7ac03cece220dddb7d3aa494c9f07",
".git/objects/35/9b83f186fd57392af327f5775b89c163f465be": "eb4387750b629f7e18232fa188995c96",
".git/objects/36/99f7191c71158894a9f4dc387ebacb6ffe166d": "c2f4b4969d440aee4f0eae2a4862f716",
".git/objects/37/7b2487caf323c3d864e7151c4bc71cd70c6b94": "7a23f29c0feab0a17a6fb1b86475f701",
".git/objects/38/a55fd2cd2a19d41e8b02c89a63887d9faf759f": "07ac7d1b043f805682f2029576cef82b",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/a173dbf47e129cdb0782a58a5b26c6d501122d": "3948010f08c72c5ef9629da28b968f78",
".git/objects/3d/73231fdc315032468e4959f2e17113a60e044f": "bd255f5d09752b13d4ee7c721121945d",
".git/objects/3f/a32005ccc3af7612feb25e5015daec88a93eac": "527108af2fd5a8dfd4c16a5bda91c5d5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/f18c28b7ef360e66f99e6ffb2ee91fd46186ec": "55fd3918a70c4b884da92387edb835bc",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/69a87df6565b1dab2ffd881e39be01e7c0715a": "15079fb3484303706f08ae925684ca73",
".git/objects/43/47fbfb25d67e0896d08ed9c9e66f63510458ee": "1745f26faa968b9b85da5bb5352bab3a",
".git/objects/43/795e386d5faa7c3cee6dc944bd46f7e885ec5f": "74b17e5e2cd093c7a1b084a244ef3711",
".git/objects/43/e008d6266f0d64b08ea616c85bcd0ee432f934": "5939b9bcb891f95ef79fd4ec054ed7c0",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/a2fbcb323172751909bb806d96261b30810029": "a3c44e1679bc08b9ec94cd69926ce6cc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/f0308901003981f3bea50cac11fa43dbe6eb41": "b26f788593d9a7bb02f085f4483d47c2",
".git/objects/47/12b2b5150037b255913caad233c7e5c9ab2783": "16b3b3fd212a881f829cf4c493b1379c",
".git/objects/47/b47e860bca8b99d525e7a28e76f77befe001e9": "c9def689909a72e10f94af6cb56f2d8b",
".git/objects/49/e9a8e30ebc317a001e645e232e4b6b9053e02e": "3dffcf73121922331d8ef160d90a664e",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4b/67c6dfcd87959c1b5a7f0b49341e2c431a186f": "f57a3677c2becf426628a9e91f31e67a",
".git/objects/4e/48eee2c3ead030a328aa32df5f1c591a782a2d": "9be1dbafb086d2264635135b86b75e16",
".git/objects/51/549a3047d6f7fc38fb2eb63f976d4153a0f1e3": "05f54b9d59bebd242bcbb4c5b184a3da",
".git/objects/52/eb669ad3bb001779ece606e606285339500a65": "fdb9b95b69a7137377732eb761c7f4f6",
".git/objects/52/fa4c0b711796313ad21569afc924dba695824a": "3e97993ecfed74a1f0ffa940e2582ebb",
".git/objects/53/836c79746529de29ba706cf3d46094f7ff8ebe": "b42ac58a007cb4231753d0050a20d73c",
".git/objects/55/6e563cce6467ee2507d4a3be6255dec513976e": "bdb710d7257c204d4965b65f1e789140",
".git/objects/56/749fcf32ee2b8cbe1499f83a12c131383a66f3": "c5dfddd9576f6a49427cceb843f128c5",
".git/objects/57/dafea2261ba56100d95670065856d396ca90bb": "c7cb7c2bd309d07200a17481fa9eeff5",
".git/objects/58/e58c9319907c991c9522d81393b05ae3de6506": "f3666bfe38ed354b947562083d22d856",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5a/a7fe2401aacbfcc93035995c29bde567a9f0a8": "8b1c0561753dbed16f43754955dc38ff",
".git/objects/5a/ffe9442777983aeefef218ffc041aaf910b0fd": "fe828d394ea6d6eb5cf5f927ca2d7582",
".git/objects/5c/08357994e1e85d78f02c8cb6e507ab65776159": "a82b70061b849dd2b6e705d8ebc690b6",
".git/objects/5c/edd96403cf76dcf281c1922c3739c7eb4d3bd8": "15fd0b47a0c51fdc0cf8de696a0b2307",
".git/objects/5d/b1b6997b76243db52222b39f0525a3647adb82": "4cf3acad57d5d0b02f9acebe81fbbd96",
".git/objects/5d/d4975d629c9eb199b89f81e97ad4027f978a2b": "a02e5849e6ae9da3660af6e2118211c4",
".git/objects/5e/4b6189125c5691fc312974e8bfccd424443e29": "41b2a818ae3b1dbd406706ca6c6a629e",
".git/objects/5e/dffa18d5eb559adb262b73f6508cef24d511a9": "9ef18d2bfebdc53eec5a5c6c3c863203",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/61/fb2511a6b7b5ff0dfa23bf79d28cf83864edf7": "3173e462478e7d003349af4f62aa3b43",
".git/objects/62/028edc9ca5e8c1a9044e48abd94c79fc47a2f3": "3f496370fbfc4b2763b620d085126ea0",
".git/objects/62/04e2cba4ec995b4177c87e65a673aa1b884c9d": "d763f15886af0e95be36a12c8e1d9a66",
".git/objects/62/22b687be22953ceacd0636fd379c5016459c8d": "e2d40431adc4a15cc7797a97e0230a79",
".git/objects/62/d9b0cfe979f79ab2039610463400f184127b37": "66eb3ceb492026192ea5d7fdc3c636eb",
".git/objects/63/ea0fe01d2c218e9936e824640200b6496db39a": "b6917168f55a92f73be13429aa07fb38",
".git/objects/64/32fd018169c8f5db928cddaa96344347b2f0c4": "62b9248720bd163f423012dfa5d28c37",
".git/objects/67/391f57c24811cb4319fe8c80e2a0a2d80d7e3b": "47eecc7865db3d64a648124f844ebb7c",
".git/objects/68/877ab60b16ff4ea7cc16e64d2f61052ce8bdee": "5c0a37e48e570c432e5f187927e43b3c",
".git/objects/6b/4b99daae5752045e88c4ceb5cbfbc8bb89eddb": "20c801ab39a4b12a9eee161784429940",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/3ca12cfe95dada946d316becd9ee96fbca07fa": "464944c9e3f03032dea47dab9a21a0c0",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/9f06aed6d2ddf26e3c9573c784c04049b681ec": "b06639b3e77846d67e06aa46dde8a7b1",
".git/objects/74/993ffcb8f821011c373d4617889cbd233cebc7": "9d6960def4f0f8ab73cab55a3ce5ebe5",
".git/objects/75/3060feaf4cfc9d056abb272ad5fa7789ac6871": "8ef91703d82b10dc5b9b2911708dfa2e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/1663af20a153b707c702b8635c6a6f806c12e6": "f7ade12ffc84e0fd8bb466cf05613db1",
".git/objects/77/eb701b666d0269270996e612f05eb4e6c2ff19": "5ad1af214c2b3274376c86bb4f590f8b",
".git/objects/79/ed9a42f52c6485b0feec646e1b8592d7cb761d": "636aef6bcec3f5ff937985b790f8e4a3",
".git/objects/7a/9d77d9c4ec7b55a9356c31ad41fd2b1c5c01cf": "aa6ea06c85ccbd1bf900fdbe4b5aec39",
".git/objects/7b/d586fa0f60114d56b26cc4be23204e1e0ec91d": "01905cbc18dd216a75c3555b5369a33f",
".git/objects/7c/2fedd7ba114b61f8597ec3388a4cc3936d943c": "0bf409996d1d96b5a74f6cd2cf7baad9",
".git/objects/7d/1764dfd2d1b96613a76f374fee0a8ebd605eba": "c9f3f363d2cf9be673cbf7ff9ed164ed",
".git/objects/7e/090f3f9f971d2e54e39546f27e76a39948341f": "17764ce69143e87d0dfc7ca1daf62f0a",
".git/objects/7e/61dd3ad7b856f889e86e24206196ab002cde96": "9c63b06c9b945984efe982569fa9f8b6",
".git/objects/7f/be4f4384e58c3aabaca0cabfa51de16a20f53c": "db60ca0412358a562b27c1add5e07c55",
".git/objects/7f/cbc579988ec45daf27662dd8d8ca468900b88a": "1db2b4fd743c27d4efaa4d309d68f18c",
".git/objects/80/2cae88147edc3f5486871a85eb72451e8f66c4": "d4cb9af81ea7eba2e22ad3658afb1470",
".git/objects/80/de7ac1c31c349115ab4b7f57a6902bce4ba05a": "87e151ecb522bba6eb005ec27f3613c0",
".git/objects/81/f87942fd8285dae8fa60f367dc2662c079bb27": "151d487a6510d023b81a361c7c52d803",
".git/objects/82/0102fdf9113e4ce096e1e490b69708b4bcfa1c": "f051d7b2bc242ecbdef9de38eb4a4395",
".git/objects/82/46d757de106555730603119c1547a0af8f9b91": "98c4faa3caa5e3a53d70c675719dcaa8",
".git/objects/82/8a0d8d2f1bd23b615df382a298edc5659e57f2": "944ac87d9b7db4e041ecaa39975502c8",
".git/objects/83/d70c679e6cbd61749a8118c8c317f8fb064289": "17da28f6dbd3d47ee34d59a035b3448e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/9bcb0a102d636c36e5f129163e9960a0e0a265": "25edfb9eb80cf4ee0ba91eae8efe2ab7",
".git/objects/84/9ffe499fde8717398e6ad7db526e74510456bd": "adcab4a84103838cf8cb23f050c7c40d",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b9e629946b43e6622918284c0d6b61cf6f1a24": "1f488478dd37efec6a196603dd3d7e46",
".git/objects/8c/0b8fe9e2eff8e456aecbe18de9315a10028792": "1a4667aaeae6e1244e1eb713fb5fc8e9",
".git/objects/8c/644c9f4afb7ab45f3d97c1c451451e1aa597ae": "4d818a36a22b87a1dc75c154e7720a94",
".git/objects/8c/8ba78d220cc2c5f1f1d205badc71c5b18a53f5": "9d7c78a5020bdcd6e4e9b8b7e0a103f1",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/11d9348d4afed059146289ceb3482d94fef142": "ce3e26917d19614fbcb5c0e8778db9ce",
".git/objects/8e/8fa112eb058bd630e0b06f29bc11580fce2d7b": "1263408fc426279987865a136fdefc81",
".git/objects/8f/cc48289a71b9168ae754df7f390081fc2d7646": "a049831bf9443ea657bc1fea42b5ec1f",
".git/objects/90/18747b77f331bdb411039532d9402c4661f137": "33117599223a5176b98f4b3815917a51",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/eab450609b7dc5d076ddf6c8416de8209373e0": "9b3d4cb7f5916a87f36a18b466ea7ac4",
".git/objects/93/6eb0bf681672c6b3ea2fb69f3ad3c22a7a5b79": "8add6d175ecde1996b30e142ad05ade9",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/96/6932d89c4fc9d1968b04d4b5459a3b1ece9561": "e27ff663d554b04e2dcdbb22c1cdac30",
".git/objects/96/8d03be119979825deb6d634c74b355b580f543": "741aa701f98d3a188ea9e0a228c5e66e",
".git/objects/97/ad74985ea2ae86a6ab482507c46858c50c1cbf": "c793f9665c1a0f543580cf1bafb30e24",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/6be0840aeb4d3acaceeceb06758356f740a4db": "4781af0529c0155770a4266b7c0397b2",
".git/objects/9b/e6fdd434597c4b3b7e54af058e9a4d2418aebd": "1bedf940d238ab68932fa6da5aa3fe89",
".git/objects/9e/6d61bf7e96d985f347e0c692664e1d43021e82": "c236e9e0c1a7c7fab6af7fff5e1c4b33",
".git/objects/9e/b2f9dda1cfa85473a06cb6b17f0fe86921b475": "abd7cd07daa989cbf2ce5511d8033bd0",
".git/objects/9e/c5c56e9e5c93c90af05e61fd5ee2a7c8928f65": "a76fcf5ab6751ee128ab73c96a75e743",
".git/objects/a1/75057ff26ac619b581e99fa789e3790d4b686a": "08535ed959d0ce1f09d97c510021cb53",
".git/objects/a2/113ae0b4d62cc8c06a45cbd35861c2c19e93db": "db2839dc46b7c4dce7191d29f124883a",
".git/objects/a2/117c1ef52da9a48076199b2e32d4abce83a698": "61bf11f62b585017957f9cbfa7dc0bed",
".git/objects/a3/b602fcb9048ef2ce57be4ca5699472d69ccce4": "ecefaa3f91b06afceea58dc1fc642e0c",
".git/objects/a3/b82a95615e9faa07303e29c2fde16156b77ff7": "2c32d82ca09d4c3ab30c91e3eb824708",
".git/objects/a3/bf84ba07b1b62fa7b297a277f1c0127d94762e": "279e9ec8770de95dcaec23213bd54ca7",
".git/objects/a3/c23a3656e5e3566d78dbbecc6ced8eef79ef1e": "fd5c80f3b906daa52c7e1cee6adf3685",
".git/objects/a4/513f472c67a07ffca21f5fa4420f4874c7693d": "4b50b8a5ec4dea20488ca286af7843d5",
".git/objects/a4/72ab03f312d4cc2ab572d26d252dfd9b141a94": "17fdda3731539fa9df256656d914595c",
".git/objects/a9/b3aa9a9a7c245a390286ed207d580e7ba2e78e": "b60ddb88e40c191359d168e683fee425",
".git/objects/aa/0b803af03a43695325902463d4a7721f7a6cd7": "7b4d9780858d360c0aa0394874152f5a",
".git/objects/aa/717324e454d918ffe377430b0d050a15dddac9": "bb3b318d7a1c0e8cee5717859b04b170",
".git/objects/ab/563fc5bc2ded3564fdee1cfd0331a6bbf9880a": "25169e96707dccec5b3e68a4b7be58a1",
".git/objects/ac/0ff7990f8393313e68cff8c702978f6fe46259": "6008f4ae044fc04ace631df4963b96ba",
".git/objects/ad/410ecbfdec07141ffde3e8951edac42c6db9e9": "40cd15dd3e61f9f51f9384854c8d17d6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ae/133eb63d1e0fdbd783d0cb625684119fa2a3e0": "68d82be9e6e72c84d970e44a8fb23577",
".git/objects/ae/594c3e38854783d988dc4e89cdcdc53f1a9bfa": "77d249f64404205036d2e82648150e77",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b0/03e0f80c2203f54013c1c535375d54193698a5": "c835e22c2585ae214b688697a6331094",
".git/objects/b1/0d74c31929cc035b85d8733ae2af378cfcab2f": "76467f0fcc199b7be3a05409ebab5b05",
".git/objects/b1/13d8f0be13351071cbd89fa24a79fb66c96606": "d119c9f27f1825a0cccb56dcc5917949",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/8def66b049d5142182d375bca4393551c6e5b9": "a55c54a5dc9e5f70b55a7ace5bfe034a",
".git/objects/b1/c2ad0f6d6cb57887668baf1c7ca74bc8d130ce": "863b616bcebba3a0d256621cff213a15",
".git/objects/b2/1a64dd66afe07207e8bd633a70659c3f8a44dd": "aa4d36126aa97424da7b4f685cfcca3b",
".git/objects/b2/e55e1ba14c43acfba0eac362eabadce8124baa": "a513568592d25e6f92a7ca5c06358300",
".git/objects/b3/92596e965c52f4b9d8f467f5f1b598ef7390a3": "6e15e2790a7685a6355dccc91cd8190a",
".git/objects/b3/d6f3904c383f2683bae15806bb49243194a7f8": "87b1c920d20e8a1bb6684ae2b182e844",
".git/objects/b3/e27cf2847af67a4590d3305282f1cdf73f6fc6": "31f420dc781a9216beb6eba05b9e609c",
".git/objects/b4/17db4468a4cd794b2595b86d1e23c1bb42d7aa": "9dd57404de9196b8180c5d39b1880b71",
".git/objects/b4/622698f4b67f2506def0238298db511909550a": "ca505990adf589caeaf05fde21c453c5",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/15079955f8a4a1fb828ae470f1c689a401513f": "f4275e8da8bcf81e0f1584fd85b5ed5a",
".git/objects/b5/b970e28d4608f554d5c098e67c42e00ceb3989": "574b27e5adc7d9e1e18db9f12223a932",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/d05a9c811b6e76756465d0cf67bf58100d3f60": "32d8500c1bfdf89daf0e98daf9057b78",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/29f49cd44f0c93f16509865eaa25fe75d12e7d": "6cd9b18a50fdb264cd88a8d77656c4d5",
".git/objects/bb/968f74d9fa2bb6b7315fcdc023f30ad98ded1b": "bc2bbae2440bdbf2aeedd58fa769aee1",
".git/objects/bc/1d84b096fc2bdbcb9e9a6bd46600376f63efbb": "d2b63c0735a7f265ffc7b1ac1f9fdb60",
".git/objects/bc/d6bf8bcb432ac0d9f2663c3a21cc964c7ee4cb": "d1a5863ce067b7cb94026efc2e0525cc",
".git/objects/c0/a69b5a83ad7b59bc38db48c04cf52362828b6d": "f0163ab5a2987f3a06098af22b63c290",
".git/objects/c1/cbac566ccf50f39cb0ecf2af3f58f74858d277": "3b4a9337e77e9b254ec4dd122c309f4c",
".git/objects/c2/c132e31d5d300acfa13ceaf763c3c41cddb8ea": "9f7051ed4a9608d4623aeff6d77b5415",
".git/objects/c3/577569346762469e6affa689d946a802a9f36c": "f45f48f85d186ba130bcfc862e4af496",
".git/objects/c3/5a54fde42c73b10596cbb579edce0422c1c883": "2f5e99fea95ae8df629533b54cd36d3e",
".git/objects/c4/459311376f9d61c60ef384c45e2c8982d615be": "aef3764e8d784e1b5fde92dd56f78578",
".git/objects/c4/fd7de3a60436e7f1be8c7fef1d13939c0ee51e": "d6206a2ce033bffd54460c6562d3bfd3",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c6/379ec0ebea27f7466bd45f2e3b934c7e14bd3a": "d95b7c735439724e474aeae19998b016",
".git/objects/c6/5da04645dd9208e1a2e592278302bb30d6269d": "8cb0c0b4cc7e8bf1f134643c5b4c9256",
".git/objects/c6/941c4651cea051cd9858e85d0001a6d6b86610": "484b2a48e2e76e6d749c136de8f0602a",
".git/objects/c8/c942b2cf67e953d6ba53c1d98f55214eccd154": "0dfeff50aef837700e635f79c331a0e6",
".git/objects/ca/e347c12e6d3b9aad79822b39e2bf710682dd81": "bb5fad22ad34bc244618143c1c1f9607",
".git/objects/cb/51c76d1313a1a7ab2d1cff7991d9497ef52996": "b53ba1ceef999be641dac25f5524007a",
".git/objects/cc/15de181a68d7e698eaff0bac9a76ff4bc61640": "ccc9dfde645237cf72990cfcf38548b9",
".git/objects/cc/9b6f1c7efd68524cf42134aef61ee87657d344": "1b5d827b821e8de4b183d15920382a1e",
".git/objects/cd/5295d53c0a348d7ab5f0f02fc4626c0989236f": "6b14382c18b710b43930909fa5697f3b",
".git/objects/cd/bc68599008593e3fabd335243f47f6db5490c7": "ff5d65071926e577284ab95d37d86860",
".git/objects/ce/1f0b9c6c9bef00d55e71512c8fdc38445b2401": "38b27e24aef9290abfa4a262450e939a",
".git/objects/ce/675fd07e4800e69a3a89c0104668980ac28d3b": "dbf83bb9a802a322f8faac36c8d7e1ea",
".git/objects/cf/1d7cb66034447f39879d80e91e45befc3acc08": "3cf9f6c531bd4a5bb45f4d9f507eccf1",
".git/objects/cf/43da283c68f8aee8ee8fc85c655ea492bd04fb": "306c7d229e4ccaa2ef60a93be3cbaae1",
".git/objects/d0/1c6dbe7d1492cb543d496ed40193da9b47db6c": "02bcdc806167ee5c08a7529183f696d6",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/38a79b0e106bd969bd57e551d3767bd96d3022": "bbe4d3ce9f016aa24da136a082b91b72",
".git/objects/d0/faf501dd734e60683b6558ee8f815ca1913e0c": "73c6a3059609a4ae3e4217a01242c58f",
".git/objects/d1/3970a02fa270b3a270bfa09319959936897115": "d7cb01266a7c6b7b791d0c7a5593731c",
".git/objects/d2/6545ffb6f8a70a06733b2cb4eadfc366ba0c5e": "c3c1540262ed21d92dd1c2cbb19b428c",
".git/objects/d2/8c4f353918cdeaeafac0544791552ef2589b19": "c7b803e0bf3e093d8287fdcb5b1c5368",
".git/objects/d2/e6668bea03a03125a62e46dd5111127f24d32a": "0ac3d8f2cbf61b58f5e768e4201a4e48",
".git/objects/d3/26623437b3a50b051620a882aeabba3caa03e0": "55f64e07914e04b7426b94ae8865da91",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c531d1de64f106cb1f8d0be4b4c6503c747f2d": "2df3ace02dacf0f17797207a35a0f12b",
".git/objects/d5/67700356dadb3c1b25d3bc427c17de66992da8": "c6c56d1c3fa27a0b08ffaf0950b17926",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/4c8d2de33b420adb7fcad687a52e6aab476d28": "2cd34ff8bbf1f5e80259ba4a15e287ad",
".git/objects/d8/96961a107e6e903005fb34b8a20918cf508923": "2e8a0e9ea43d7c72891b4a89a075581e",
".git/objects/d9/481e7aedfe3d2c165fcabdfd6a079daefc1363": "26b2ba840b73d69e0b8bd975c071c777",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/996ab5a8aa35c0420fa24f6cec08c9a7991093": "15a7e20f12318c00959ec5e9db89bd6a",
".git/objects/dd/4e219817b584a0bd27c5fd0844c6b4d019db2e": "e4dc9d282da05d3158ccc24aac5e7341",
".git/objects/dd/ce70136a64b37e80fdb06bbe91e6b2e3833b2b": "de19edd82ca1c68fb4a6c0972513abf0",
".git/objects/de/e487ae0ef40ede399952f2a67972a874e65e7f": "98ca7be364663d7e62730f21ac15fcf5",
".git/objects/df/28c0e5201a19a16fee6400265575b4743ec303": "099cbf062284a9bde1c51ec4f38bb78a",
".git/objects/e0/87ff6fbcab1489dfe6be24b484378e25343004": "a53706c8b565109b9c7709d66ee6c359",
".git/objects/e1/c09e3d033e6aa37d0fb9be08c680e8fa9cae2c": "44e0d308685df3a12ae18cb829212905",
".git/objects/e2/e6bd90a2834db94035b5f03c217d45828cf06f": "d171b9f9192dcae279877dc4055c34ac",
".git/objects/e3/2394e154cce039852c6c910a56f9cf56aea862": "22b2cb467c3e5b2f0011acedaba0c566",
".git/objects/e3/94d570f2e518f8a6ed121a8615e49c9139c517": "82d570c0cac2ef6f010c4d3c1a6eaeb9",
".git/objects/e3/e5acefb4845ead0f64ef9f865500c436aab5d5": "0623540a2214a287b1a9a489591a1aaa",
".git/objects/e4/712503362d31a09ee7a06a7e673174b7dd3e08": "75749be1fa53a999a67dd697a42bc7be",
".git/objects/e6/983b2a401efc9d4b962711871b6b17cb0092da": "8b7c3e094043ff476a490eef8c3d9596",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e8/630804fbb9e7fa471b76b8a0203e77e39f0f35": "df84993844f8ee057861857b0c4667e0",
".git/objects/ea/5b8c86d4eca689b6437ac2e39639bf005012f6": "b7b2a931fea845541e7d5fd3cdddc59a",
".git/objects/eb/33071ed82f383da698da200f947291e6d1ad19": "f21eb03686098f268a2adf5a2a2002f6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d95de6d90d83030209be9349816863bc69f8df": "e7613fd8d45db197d72fa593ba4f75f8",
".git/objects/ee/bf03fbdb27163d0a40363377d1b15ee9429787": "359518d23790ab71cfacff1346dd4569",
".git/objects/ef/5a36e707d8993d86676eff4dc23ee414565ded": "2135a9787c8432fddbe7dc8acaa285ae",
".git/objects/f1/3ebf7c46775243300856d1f90e20c05f514f10": "a3266b6e8873839e8e6ff6c334bc7eca",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/24e8956b313aced57bff6aa4d578cf9bcdd676": "4845347662eae1ea6eea2e38ecd34609",
".git/objects/f2/8cf6a4b2845544936294e21ac421538a756916": "4993197a030c43b9be101f220451fb59",
".git/objects/f3/16ed95efa1ef1ed7b623a102861ea27194d3c4": "56e60cb7dfbdce55be662f9613c7fffa",
".git/objects/f3/5a2a89b22bbb5d91e38513fb9c290c78f749e4": "52f4d1052f2e755b5438a77368894077",
".git/objects/f3/82f7619073ce9dba6ad75ca70943e8526b424e": "d464d29a40bf31931771008c58703636",
".git/objects/f4/ab442201278fa28ff95025351ac33502faecee": "89c0881b1dfc1c3b104b87a2e7291641",
".git/objects/f5/89e2d6220ec494e8eeb6877b66247c83176731": "1c7f5fe39d372f4b1a43f3a23fa7d49a",
".git/objects/f5/f1c7dca797dc80dc4ec07f2f087156a6cd75f1": "13afdcbd6369d8c080b9196150ff96d2",
".git/objects/f6/570c781137159dbdc913ca04119e8b53cd5cbe": "a24f1b100f7a29ad12c02cc7e252bf81",
".git/objects/f8/0505754c0c21136e0960fb2cb14a7d0ee11b17": "9c5d340fb4cd8276d21f1e20b4bbedd1",
".git/objects/f8/11a391162725e4eee9b1efc169b55226645913": "e129bbb4b90d84dc348b79e05b891f86",
".git/objects/fb/4ae309aec1d0e5e6221d5719ae0a8ce84a05e8": "6b3c7fd1b64af54337ff49bfa0ba08c1",
".git/objects/fb/9cff1ecb9860cbc5e2e1107a8e80ed9fbabb67": "fb3389149dd9407b2c8cfed40359cb82",
".git/objects/fc/a432007476ea8e2b1b370e12ed8887e4d085eb": "1b534f6b9767f8656a2e44a771d847ed",
".git/objects/ff/c3dbe21b0bd3767a066a22cb35f0c14f26816d": "f28e64610321e8ef8c2474282f3ca943",
".git/refs/heads/main": "8d3c28643ae86ca22c6276115196d603",
".git/refs/remotes/web/main": "8d3c28643ae86ca22c6276115196d603",
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
"assets/fonts/MaterialIcons-Regular.otf": "7035aa3662ea7f9d899d16219f8996bd",
"assets/NOTICES": "338ecb1dfb58cba4f79bca56baa2f8b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2a59eaf90b18e69287d6802c2bc8e5b5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fd04dcbe1f992a5af2849d0e0d1545e0",
"/": "fd04dcbe1f992a5af2849d0e0d1545e0",
"main.dart.js": "0d9ffa25d60d8f93311b1371f3f94a7a",
"manifest.json": "4ec450d09bf400b815161bbba43670c8",
"README.md": "e948747be145a94ef76d481861ca75f0",
"version.json": "816d3d59e4c330071fdde0507ec1791d"};
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
