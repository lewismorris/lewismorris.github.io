const fetch = require("node-fetch");
require("dotenv").config();

const getArticles = async () => {
  return fetch("https://dev.to/api/articles?username=lewismorris", {
    headers: {
      "api-key": `${process.env.API_KEY}`,
    },
  })
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => console.error("Error ::", err));
};

module.exports = getArticles;
