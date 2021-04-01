const fetch = require('node-fetch');

setInterval(() => fetch(`https://football-botuz.herokuapp.com`), 5 * 60 * 1000)