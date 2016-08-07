const rates = require('./rates')
const zones = require('./zones')

module.exports = (departureZone, deliveryZone, pallets) => {
  const zone = zones[departureZone]
  const rateKey = zone[deliveryZone - 1]
  return rates[rateKey][pallets - 1]
}
