module.exports = (sequelize, Sequelize) => {
  const TradeMarket = sequelize.define("tradeMarket", {
    name: {
      type: Sequelize.STRING,
    },
    icon: {
      type: Sequelize.STRING,
    },
    symbol: {
      type: Sequelize.STRING,
    },
    buy: {
      type: Sequelize.DataTypes.DECIMAL(10,2),
    },
    sell: {
      type: Sequelize.DataTypes.DECIMAL(10,2),
    },
    change: {
      type: Sequelize.DataTypes.DECIMAL(10,2),
    },
  });

  return TradeMarket;
};
