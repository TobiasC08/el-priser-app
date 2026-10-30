import {router} from './assets/js/controller/router.js';
router();

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./serviceWorker.js")
        .catch(error => console.error("Service worker registration failed:", error));
}