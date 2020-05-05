const fetch = require("node-fetch");

const config = require("../config/config.js");
const db = require("../config/db.config.js");
const TradeMarket = db.tradeMarket;

fetchData = async (currency) => {
  console.log("fetching for currency : ", currency);
  // if(currency==='ALL'){
  //   let data = await loadTradeMarketsData();
  //   console.log(data)
  //   return JSON.stringify(data);
  // }else{
    let keys = [];
    let response = await fetch(config.apiFormat + currency, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      return res.json();
    });
    let data = response["Technical Analysis: SMA"];
    if(data){
      keys = Object.keys(data);
      keys.forEach(function (key, index) {
        if (keys[index] && keys[index + 1])
          data[keys[index]].change =
            ((data[keys[index]].SMA - data[keys[index + 1]].SMA) /
              data[keys[index + 1]].SMA) *
            100;
      });
    }    
    return JSON.stringify(data);
  // }
  
};

fetchMarketData = async (symbol) => {
  let keys = [];
  let response = await fetch(config.apiFormat + symbol, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  }).then((res) => {
    return res.json();
  }).catch((e)=>{
    console.log(e);
    return {};
  });
  let data = response["Technical Analysis: SMA"];
  if(data){
    keys = Object.keys(data);
    return ((data[keys[0]].SMA - data[keys[1]].SMA) / data[keys[1]].SMA) * 100;
  }
  return 0;
  
};

loadTradeMarketsData = async() => {
  let response = await TradeMarket.findAll({}).then(async (markets) => {
    let data=[];
    if (markets) {
      markets.forEach(async (market) => {
        let chng = await fetchMarketData(market.symbol);
        console.log("changes : ",chng);
        data.push({
          name: market.name,
          symbol: market.symbol,
          sell: 171.16,
          buy: 2.84,
          change: chng,
        });
      });
    }
    return data;
  });
  return response;
};

loadTradeMarkets = () => {
  TradeMarket.find({}).then(async (markets) => {
    await markets;
    if (!markets) {
      TradeMarket.create({
        name: "USD",
        icon: "lan1.png",
        symbol: "USD",
      });
      TradeMarket.create({
        name: "Apple",
        icon: "lan2.png",
        symbol: "APLE",
      });

      TradeMarket.create({
        name: "Boeing",
        icon: "lan3.png",
        symbol: "BA",
      });

      TradeMarket.create({
        name: "Inovio pharmaceuticals inc",
        icon: "lan4.png",
        symbol: "INO",
      });

      TradeMarket.create({
        name: "Chesapeake Energy Corp",
        icon: "lan6.png",
        symbol: "CHK",
      });

      TradeMarket.create({
        name: "Netflix",
        icon: "lan5.png",
        symbol: "NFLX",
      });

      TradeMarket.create({
        name: "Whiting Petroleum",
        icon: "lan7.png",
        symbol: "Wll",
      });
      TradeMarket.create({
        name: "American Airlines",
        icon: "lan8.png",
        symbol: "AAL",
      });
      TradeMarket.create({
        name: "DNR",
        icon: "lan9.png",
        symbol: "DNR",
      });
    }
  });
};
module.exports = {
  fetchData,
  loadTradeMarkets,
  loadTradeMarketsData
};
