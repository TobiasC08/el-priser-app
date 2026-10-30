import { navbar } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { pageHeading } from "../components/pageHeader.js";

export function historypage (){

    const today = new Date();
    const dateValue = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

    const page = `
        <div class="overviewPage">
            ${navbar()}
            ${pageHeading('Historik')}
            <input type="date" class="historyDatePicker" id="historyDate" value="${dateValue}">
            <ul id="historyPrices" class="hourlyPrices"></ul>
            ${footer()}
        </div>
    `

    return (page)
}