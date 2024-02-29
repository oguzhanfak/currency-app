class Currency{
    constructor(){
      const api_key=process.env.API_KEY
        this.url="api_key&base_currency=";
        
    }
    async exchange(amount,firstCurrency,secondCurrency){
      const response=  await fetch(`${this.url}${firstCurrency}`)
const result = await response.json();
  const exchangedResult= amount * result.data[secondCurrency];
   return exchangedResult;
}
}