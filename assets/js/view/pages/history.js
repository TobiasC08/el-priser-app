import { navbar } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { pageHeading } from "../components/pageHeader.js";

export function historypage (){

    const page = `
        ${navbar()}
        ${pageHeading('Historik')}
        ${footer()}
    `

    return (page)
}