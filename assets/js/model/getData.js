export async function getCurrentData(){
        let response = await fetch('https://dummyjson.com/products')
        let jsonData = await response.json()
        return jsonData
    }

export async function getTodayPrices(){
    let today = new Date()
    console.log("Today: ", today)
    let year = today.getFullYear()
    let month = String(today.getMonth() + 1).padStart(2, "0")
    let day = String(today.getDate()).padStart(2, "0")

    let response = await fetch(`https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`)
    let data = await response.json()

    return data
}

export async function getPricesForDate(date) {
    const [year, month, day] = date.split("-");

    const response = await fetch(
        `https://www.elprisenligenu.dk/api/v1/prices/${year}/${month}-${day}_DK2.json`
    );

    return await response.json();
}