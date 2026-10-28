export async function getCurrentData(){
        let response = await fetch('https://dummyjson.com/products')
        let jsonData = await response.json()
        return jsonData
    }