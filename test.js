const request = require('request');

request(`https://api.ipify.org/?format=json`, (err, response, body) => {
    
    if (err) {
      console.log(`ERR: ${err}`);
      return;
    }

    if (response.statusCode !== 200) {
      console.log(Error(`Status Code ${response.statusCode} when fetching IP: ${body}`), null);
      return;
    }

    const data = JSON.parse(body).ip;
    console.log(data);
});