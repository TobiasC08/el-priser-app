import { navbar } from "../components/nav.js";
import { pageHeading } from "../components/pageHeader.js";

export function settingspage (){

    const page = `
        ${navbar()}
        ${pageHeading('Indstillinger')}
    `

    return (page)
}