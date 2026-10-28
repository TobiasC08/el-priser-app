export function navbar(){
    const paths = [
        {link: "#home", text: "Lige nu"},
        {link: "#history", text: "Historik"}, 
        {link: "#overview", text: "Oversigt"},
        {link: "#settings", text: "Indstillinger"}
    ]

    let navbar = `
        <nav class="navStyle">
        <img src="./assets/img/appIcons/mainIcon.svg" alt="Logo" />
        <div class="navLinks">
        ${paths.map((path) => 
            `<a href=${path.link}>${path.text}</a>`
        ).join('')}
        </div>
        </nav>
    `

    return navbar
}