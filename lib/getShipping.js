const rates = require('./rates')
const zones = require('./zones')
const zoneRange = /[^1-24]/
// const rateRange = /[abcdefghjk]/

module.exports = (departureZone, deliveryZone, pallets) => {
  if (zoneRange.test(departureZone)) throw new Error(`${departureZone} is not a valid departureZone`)
  departureZone -= 1
  const zone = zones[departureZone]
  const rateKey = zone[deliveryZone - 1]
  return rates[rateKey][pallets - 1]
}
