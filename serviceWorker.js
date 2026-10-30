const CACHE_NAME = "elpriser-v2";

const FILES_TO_CACHE = [
    "./",
    "./index.html",
    "./offline.html",
    "./manifest.json",
    "./app.js",
    "./assets/css/site.css",
    "./assets/js/controller/router.js",
    "./assets/js/model/getData.js",
    "./assets/js/view/components/footer.js",
    "./assets/js/view/components/nav.js",
    "./assets/js/view/components/pageHeader.js",
    "./assets/js/view/pages/frontpage.js",
    "./assets/js/view/pages/history.js",
    "./assets/js/view/pages/indstillinger.js",
    "./assets/js/view/pages/notfound.js",
    "./assets/js/view/pages/overview.js",
    "./assets/img/appIcons/mainIcon.svg",
    "./assets/img/appIcons/android/android-launchericon-192-192.png",
    "./assets/img/appIcons/android/android-launchericon-512-512.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
});

self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(cacheNames =>
            Promise.all(
                cacheNames
                    .filter(name => name.startsWith("elpriser-") && name !== CACHE_NAME)
                    .map(name => caches.delete(name))
            )
        )
    );
});

self.addEventListener("fetch", event => {
    if (event.request.method !== "GET") return;
    if (new URL(event.request.url).origin !== self.location.origin) return;

    if (event.request.mode === "navigate") {
        event.respondWith(
            fetch(event.request).catch(() => caches.match("./offline.html"))
        );
        return;
    }

    event.respondWith(
        caches.match(event.request).then(cachedFile =>
            cachedFile || fetch(event.request)
        )
    );
});