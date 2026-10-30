import { navbar } from "../components/nav.js";
import { footer } from "../components/footer.js";
import { pageHeading } from "../components/pageHeader.js";
import { getTodayPrices } from "../../model/getData.js";

export async function overviewpage (){

const prices = await getTodayPrices();

const sortedPrices = [...prices].sort(
    (a, b) => Number(a.DKK_per_kWh) - Number(b.DKK_per_kWh)
);

const lowestPrice = sortedPrices[0].DKK_per_kWh;
const highestPrice = sortedPrices[sortedPrices.length - 1].DKK_per_kWh;

const priceRows = prices.map(price => {
    const value = Number(price.DKK_per_kWh);
    const min = Number(lowestPrice);
    const max = Number(highestPrice);
    const percent = max === min ? 0 : (value - min) / (max - min);
    const hue = 120 - percent * 120;


    const hour = new Date(price.time_start).toLocaleTimeString("da-DK", {
        hour: "2-digit",
        minute: "2-digit"
    });

    return `
        <li class="hourlyPriceRow">
            <span>Kl. ${hour}</span>
            <strong style="color: hsl(${hue}, 100%, 50%)">${value.toFixed(3)} øre/kWh</strong>
        </li>
    `;
}).join("");

    const page = `
      <div class="overviewPage">
        ${navbar()}
        ${pageHeading('Oversigt')}
        <section class="overviewSection">
          
        
        <div class="overviewItem">
            <div class="overviewBoxes">
              <strong class="overviewPriceValue highestPriceValue">${Number(highestPrice).toFixed(3)}</strong>
              <span class="overviewPriceUnit">øre/kWh</span>
            </div>
            <span class="overviewPriceLabel">Højeste pris</span>
          </div>
         
          
          <div class="overviewItem">
            <div class="overviewBoxes">
              <strong class="overviewPriceValue lowestPriceValue">${Number(lowestPrice).toFixed(3)}</strong>
              <span class="overviewPriceUnit">øre/kWh</span>
            </div>
            <span class="overviewPriceLabel">Laveste pris</span>
        </div>
        
        
        </section>
        <ul class="hourlyPrices">
            ${priceRows}
        </ul>
        ${footer()}
      </div>
    `

    return (page)
}