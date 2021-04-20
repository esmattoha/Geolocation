// Import Dependencies
// Geocoding and Reverse Geocoding
const NodeGeocoder = require('node-geocoder');
 
const options = {
  provider: process.env.GEOCODER_PROVIDER,  // provide Provider(mapquest)
 
  apiKey: process.env.GEOCODER_API_KYE,   // provide Provider Api Key
  formatter: null 
};
 
const geocoder = NodeGeocoder(options);

// Export Geocoder 
module.exports = geocoder ;