import { navbar } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { pageHeading } from "../components/pageHeader.js";

export function overviewpage (){

    const page = `
        ${navbar()}
        ${pageHeading('Oversigt')}
        ${footer()}
    `

    return (page)
}