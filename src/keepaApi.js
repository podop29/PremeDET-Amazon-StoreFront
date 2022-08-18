import axios from "axios"

const BASE_URL = "https://api.keepa.com/"
const KEY = "24dicq3c3h55a3ijcual1su7p9aiifd15b8frqsgq5f4qd2uapdbr87qsrnsf1bi"
const DOMAIN = "1"
const SELLERID = "A3ABZ85DRQL7DS"

class KeepaApi{

    static async request(endpoint){
        const url = `${BASE_URL}${endpoint}`
        try {
            return (await axios({ url })).data;
            } catch (err) {
            console.error("API Error:", err.response);
            let message = err.response.data.error.message;
            throw Array.isArray(message) ? message : [message];
            }
    }


    static async getSellersStoreFront(){
        let res = await this.request(
            `seller?key=${KEY}&domain=${DOMAIN}&seller=${SELLERID}&storefront=1`)
            return res;
    }

    static async getListOfAsins(){
        let res = await this.getSellersStoreFront();
        let asinList = res.sellers.A3ABZ85DRQL7DS.asinList;
        return asinList;
    }

    static async getListOfProducts(){
        let asinList = await this.getListOfAsins();

           let products = await this.request(`product?key=${KEY}&domain=${DOMAIN}&asin=${asinList}`)
           
           let productObj = products.products.map((product)=>{
            return ({
                asin: product.asin,
                title: product.title,
                img_url: `https://images-na.ssl-images-amazon.com/images/I/${product.imagesCSV.split(",")[0]}` || null,
                description: product.description,
                link: `https://www.amazon.com/dp/${product.asin}/ref=sr_1_1?m=${SELLERID}`
            })
           })
           return productObj
    


    }

}


export default KeepaApi