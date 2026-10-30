import { getTodayPrices} from "../../model/getData.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/nav.js";
import { pageHeading } from "../components/pageHeader.js";

export async function frontpage (){

    let data = await getTodayPrices()
    console.log("Frontpage products: ", data)

    let currentTime = new Date()
    let currentPrice = data.find(item => currentTime >= new Date(item.time_start) && currentTime <= new Date(item.time_end)) 
    console.log("Current price: ", currentPrice)

    let startTime = new Date(currentPrice.time_start).toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit"
})
    let endTime = new Date(currentPrice.time_end).toLocaleTimeString("da-DK", {
    hour: "2-digit",
    minute: "2-digit"
})

    const page = `
        ${navbar()}
        <section class="currentPriceSection">
            ${pageHeading('Elprisen lige nu')}
            <div class="priceOuterBox">
                <div class="priceMiddleBox">
                    <div class="priceInnerBox">
                    <h2 class="currentPrice">${currentPrice.DKK_per_kWh} øre/kWh</h2>
                    </div>
                </div>
            </div>
            
            <p class="currentPriceTime">Kl. ${startTime} - ${endTime}</p>
        </section>
        ${footer()}
        `
    return (page)
}