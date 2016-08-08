const rates = require('./rates')
const zones = require('./zones')

module.exports = (departureZone, deliveryZone, pallets) => {
  pallets = pallets || 1

  if (departureZone > zones.length - 1) throw new Error(`${departureZone} is not a valid departureZone`)
  if (deliveryZone > zones.length - 1) throw new Error(`${deliveryZone} is not a valid deliveryZone`)
  if (pallets > 14) throw new Error('max pallet number is 14')
  if (pallets > 10) pallets = 10

  const zone = zones[departureZone - 1]
  const rateKey = zone[deliveryZone - 1]

  if (rateKey === 'z') throw new Error('POA - Prices available on application')
  return rates[rateKey][pallets - 1]
}
