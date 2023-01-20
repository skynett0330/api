const axios = require("axios");

const api = axios.create({
    baseURL:"https://pokeapi.co/api/v2/"
})

const apiCarros = axios.create({
    baseURL:"https://www.url.com/api/carros/"
})


module.exports = api,apiCarros