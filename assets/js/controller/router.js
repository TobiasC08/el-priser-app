import { frontpage } from "../view/pages/frontpage.js";
import { historypage } from "../view/pages/history.js";
import { notfoundpage } from "../view/pages/notfound.js";
import { overviewpage } from "../view/pages/overview.js";
import { settingspage } from "../view/pages/indstillinger.js";

const root = document.getElementById('root')

const routes = [
    {path: "404", html: notfoundpage},
    {path: "home", html: frontpage},
    {path: "overview", html: overviewpage},
    {path: "history", html: historypage},
    {path: "settings", html: settingspage}
]

// Variable to keep track of current route
let currentRoute = null

export async function router(){

    // Find new currentRoute with location path
    const path = location.hash.slice(1);
    currentRoute = routes.find((el) => el.path === path)
   
    // If initial startup or /index.html is loaded - set route to home
    if (path === ""){
        currentRoute = routes[1]
    }

    // If no currenRoute is set - set route to 404 page
    if (!currentRoute){
        currentRoute = routes[0]
    }
    
    // Clear DOM
    root.innerHTML = ""

    // Draw new DOM
    root.innerHTML = await currentRoute.html()
}


// Bind listeners to run router on load and hashchange
window.addEventListener('load', router);
window.addEventListener('hashchange', router)