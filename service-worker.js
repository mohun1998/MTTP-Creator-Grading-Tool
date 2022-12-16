const staticCacheName = "mttp-cache-v1";
const assets = [
  "./",
  "./assets/bahnschrift.woff",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/icon?family=Material+Icons+Outlined",
  "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
  "./css/ui.css",
  "./css/ui2.css",
  "./css/user_sign_in_complete.css",
  "./css/keyboard.css",
  "./js/preindex.js",
  "./js/index2.js",
  "./js/keyboard.js",
  "./js/jquery.min.js",
  "./PC/js/PC.js",
  "./PCwr/js/PCwr.js",
  "./Phone/js/Phone.js",
];

//install event
self.addEventListener("install", (evt) => {
  //console.log('service worker has been installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log("caching shell assets");
      cache.addAll(assets);
    })
  );
});

//activate service worker
self.addEventListener("activate", (evt) => {
  //console.log('service worker has been activated');
  evt.waitUntil(
    caches.keys().then((keys) => {
      //console.log(keys);
      return Promise.all(
        keys
          .filter((key) => key !== staticCacheName)
          .map((key) => caches.delete(key))
      );
    })
  );
});

//fetch event
self.addEventListener("fetch", (evt) => {
  console.log("fetch event", evt);
  evt.respondWith(
    caches
      .match(evt.request)
      .then((cacheRes) => {
        return (
          cacheRes ||
          fetch(evt.request).then((fetchRes) => {
            return caches.open(staticCacheName).then((caches) => {
              return fetchRes;
            });
          })
        );
      })
      .catch(() => {
        if (evt.request.url.indexOf("index.html") >= 1) {
          return caches.match("./fallback.htm");
        }
      })
  );
});
