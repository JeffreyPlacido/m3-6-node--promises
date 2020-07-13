// Exercise 3.2 - `getAddressPosition`
// ---------------------------------
const opencage = require('opencage-api-client');
require('dotenv').config();

const getPositionFromAddress = (address) => {
  const requestObj = {
    q: address,
    key: '',
    
  }

  return opencage
    .geocode(requestObj)
    .then(response => response.results[0].geometry)
    .catch(error => {
      console.log('error', error.message);
    });
};

getPositionFromAddress(
  '8618 Rue Drolet, Montréal, QC H2P 2H9'
).then((response) => console.log(response));

