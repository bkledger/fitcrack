"use strict";var precacheConfig=[["index.html","28497f42604eb7f767771eb42b586c55"],["service-worker.js","6124bdaa68301ac8a66d1df0d4999bbc"],["static/configuration.js","576483399c1d91ff476c0a09f1275313"],["static/css/app.5b4ddb1541a6f586357f6b89aa754e07.css","ae9c138c65bbc662838d45582eb5f94d"],["static/js/0.f7815a7142c1b7eba668.js","a7023c40ee96a11ccb435da8308a4546"],["static/js/1.3777eea9d393349a1da9.js","013dabc8f9a788a50669bd6e35d0a21b"],["static/js/10.0a4013a086d5ff2b2354.js","edc90541d43d07a7f89e7fc9f275ff71"],["static/js/11.2751fc3d2f56465d26a4.js","5ded39ddeb98eea2fe2ae8c8351c5884"],["static/js/12.5f3c1a4d7a7169035239.js","f99a0100b4be6469bf1be98862028af2"],["static/js/13.3aa7acd0e843e77f612c.js","ef3b121a6d1ca423029d4bf1873909e4"],["static/js/14.f7c4d47bf9f4c6eaa048.js","b525fa956754bdd07794d953f0843c13"],["static/js/15.25bd181cf1e7229437c1.js","82e6d3817cee0616d33077fdfc30d79e"],["static/js/16.f853f33b765ace04fd53.js","5cbd8a22fb4d1f93c0c39e2bdcc8a8f1"],["static/js/17.6c947d7890c8f41f7e02.js","e7be6e76d275fea064705d0105cc5322"],["static/js/18.7488ca883574d25ece07.js","8d0622f964e87d0620be616b171b6dee"],["static/js/19.b760724e4c1eb60a04f7.js","422fc4cffb74e68c77ef4c71f426afde"],["static/js/2.c33dda4896c08c1daadf.js","662a2d783d64b56fd4b126582d47b8c6"],["static/js/20.3bddf238fa0106ea107d.js","58063dcd958e24d62d05e189c2033d87"],["static/js/21.8c39a4f4b11dd7ce9ae4.js","2c9a63a23aea2d822eb8ae5c10bbcf1e"],["static/js/22.9c0c3ebe428d524d54c5.js","b6d41f47079c429354b582c0252cfc02"],["static/js/23.0cbd41839aa54235bacd.js","051bbba3ef2966b580cd838fadb0a6fc"],["static/js/24.f6f69540563fd634374a.js","7caaad1766029b625b94c662e4b97e74"],["static/js/25.c9653259e25e58abbd3c.js","0a0239bfba1009558410906646d50994"],["static/js/26.60c5ca04ea5318201297.js","8e1e06e5f5b3adbb0937ec556686a1a8"],["static/js/27.db6e777296d87bdba7d8.js","33cb0a33e4511ee744af7bd3a065149f"],["static/js/28.d93cf3f272816ac6428b.js","b97565e99e4a7af4a99c51fedf28df5c"],["static/js/29.9405049abca5f26a96a1.js","7e0503cbc5fe8bcb154b68d399feba2b"],["static/js/3.7772447faa459138ce76.js","77b4362a2e05bf9486698bec3cde2228"],["static/js/30.77e732b5aff5001fb531.js","e9f32a9e7e8bf4da1a3ae57e2ceedfef"],["static/js/31.06258373111871c5e453.js","7aa5c20f5321ff2adbb8115a68cd8956"],["static/js/32.c74fad3bc66c12eda413.js","7bd8a13cff9fcea93c172342daf96f71"],["static/js/4.5610eaa5d3279bfd8dbf.js","764cbda3bc3f20d30c7b9492d0b991e9"],["static/js/5.252180eb8eab2bb93059.js","a01b6c2bc5b4825d609c67c41d43de96"],["static/js/6.927cc7e38ec2ddab0c43.js","00cb398b90802c59ac0605adc8129189"],["static/js/7.8af22099a64d05d71fe8.js","ee310dd7e61e88e50f19b37f2fbbc9e8"],["static/js/8.50fcad9d4f72221566bc.js","d4b03dcc0618024795115e2bb09a77e6"],["static/js/9.cb7c49546341d06d7359.js","5b8826e6f110a193e311353a8131efcb"],["static/js/app.fe04d6eb10c6888438a3.js","373ace9d2c9936abec0e3550ef4c95e2"],["static/js/manifest.b7dfd6f250f37d5baa25.js","12cfac4eae74a6296204fc82bb8de822"],["static/js/vendor.e89a123566c96e813876.js","72c643c170d9a4f9fbd73d5d9828efaf"]],cacheName="sw-precache-v3-Fitcrack-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,c,t){var s=new URL(e);return t&&s.pathname.match(t)||(s.search+=(s.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),s.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,a){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),s=createCacheKey(t,hashParamName,c,!1);return[t.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!a.has(c)){var t=new Request(c,{credentials:"same-origin"});return fetch(t).then(function(a){if(!a.ok)throw new Error("Request for "+c+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(c,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!a.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),a=urlsToCacheKeys.has(c));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});