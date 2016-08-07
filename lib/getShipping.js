const rates = require('./rates')
const zones = require('./zones')

module.exports = (departureZone, deliveryZone, pallets) => {
  if (departureZone > zones.length) return new Error(`${departureZone} is not a valid departureZone`)
  if (deliveryZone > zones.length) return new Error(`${deliveryZone} is not a valid deliveryZone`)
  const zone = zones[departureZone - 1]
  const rateKey = zone[deliveryZone - 1]
  if (rateKey === 'z') return new Error('POA - Prices available on application')
  return rates[rateKey][pallets - 1]
}
