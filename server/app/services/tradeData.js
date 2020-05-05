const fetch = require("node-fetch");

const config = require("../config/config.js");
const db = require("../config/db.config.js");
const TradeMarket = db.tradeMarket;

fetchData = async (currency) => {
  console.log("fetching for currency : ", currency);
  let keys = [];
  let response = await fetch(config.apiFormat + currency, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  });
  let data = response["Technical Analysis: SMA"];
  keys = Object.keys(data);
  keys.forEach(function (key, index) {
    if (keys[index] && keys[index + 1])
      data[keys[index]].change =
        ((data[keys[index]].SMA - data[keys[index + 1]].SMA) /
          data[keys[index + 1]].SMA) *
        100;
  });
  return JSON.stringify(data);
};

loadTradeMarkets = () => {
  TradeMarket.find({})
    .then( async (markets) => {
      await markets;
     if(!markets){

      TradeMarket.create({
        name: "USD",
        icon: "",
        symbol: "USD",
      });
      TradeMarket.create({
        name: "Apple",
        icon: "",
        symbol: "APLE",
      });
    
      TradeMarket.create({
        name: "Boeing",
        icon: "",
        symbol: "BA",
      });
    
      TradeMarket.create({
        name: "Inovio pharmaceuticals inc",
        icon: "",
        symbol: "INO",
      });
    
      TradeMarket.create({
        name: "Chesapeake Energy Corp",
        icon: "",
        symbol: "CHK",
      });
    
      TradeMarket.create({
        name: "Netflix",
        icon: "",
        symbol: "NFLX",
      });
    
      TradeMarket.create({
        name: "Whiting Petroleum",
        icon: "",
        symbol: "Wll",
      });
      TradeMarket.create({
        name: "American Airlines",
        icon: "",
        symbol: "AAL",
      });
      TradeMarket.create({
        name: "DNR",
        icon: "",
        symbol: "DNR",
      });
     }
    })

 
};
module.exports = {
  fetchData,
  loadTradeMarkets,
};
