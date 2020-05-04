const fetch = require('node-fetch');

fetchData = (currency) => {
  fetch("https://httpbin.org/post", {
    method: "get",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => console.log(json));
};
