const db = require("../config/db.config.js");
const TradingMarkets = db.tradeMarket;
 
 
exports.getMarketsList = (req, res) => {
	TradingMarkets.findAll()
    .then((markets) => {
      res.status(200).json({
        description: "Trading market List",
        markets: markets,
      });
    })
    .catch((err) => {
      res.status(500).json({
        description: "Can not access Trading Markets Page",
        error: err,
      });
    });
};
