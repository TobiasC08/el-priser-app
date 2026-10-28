import { getCurrentData } from "../../model/getData.js";
import { footer } from "../components/footer.js";
import { navbar } from "../components/nav.js";
import { pageHeading } from "../components/pageHeader.js";

export async function frontpage (){

    let data = await getCurrentData()
    console.log("Frontpage products: ", data)

    const page = `
        ${navbar()}
        <section class="currentPriceSection">
            ${pageHeading('Elprisen lige nu')}
            <div class="priceOuterBox">
                <div class="priceMiddleBox">
                    <div class="priceInnerBox">
                        ${data && data.products.map((item) => `<p class="apiText">${item.title}</p>`).join('')}
                    </div>
                </div>
            </div>
        </section>
        ${footer()}
        `
    return (page)
}