const fetch = require("node-fetch");

const config = require("../config/config.js");
fetchData = async(currency) => {
  console.log('fetching for currency : ',currency)
  let response = await fetch(config.apiFormat, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    return JSON.stringify(response);
};

module.exports = {
  fetchData,
};
