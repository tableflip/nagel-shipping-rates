const Postcode = require('postcode')
const lookup = require('./postcodeZones.json')

module.exports = (postcodeString) => {
  const postcode = new Postcode(postcodeString)
  const area = postcode.area()
  const shipping = lookup[area]
  if (shipping.zone) return shipping
  if (shipping.zones) {
    const district = postcode.district().replace(/^[a-z]*/i, '')
    shipping.zones.forEach((zone) => {
      const key = Object.keys(zone)[0]
      const range = key.split('-')
      if (range.length === 1) {
        if (range[0] === district) shipping.zone = zone[key]
      }
      if (range.length === 2) {
        const dist = parseInt(district, 10)
        const from = parseInt(range[0], 10)
        const to = parseInt(range[1], 10)
        if (dist > from && dist < to) {
          shipping.zone = zone[key]
          return shipping
        }
      }
    })
    return shipping
  }
}
