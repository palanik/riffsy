var riffsyWrapi = require('../index.js');

var apiKey = process.env.RIFFSY_API_KEY;

var client = new riffsyWrapi(apiKey);

client.trending(
  {
    type: 'audiovideo'
  },
  function(err, data) {
    if (!err) {
      console.log(data);
    } 
  }
);