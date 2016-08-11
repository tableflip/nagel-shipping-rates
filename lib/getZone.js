const Postcode = require('postcode')
const lookup = require('./postcodeZones.json')

module.exports = (postcodeString) => {
  const postcode = new Postcode(postcodeString)
  const area = postcode.area()
  const shipping = lookup[area]
  if (!shipping) throw new Error(`${postcodeString} is not in a zone`)
  if (shipping.zone) return shipping
  const district = postcode.district().replace(/^[a-z]*/i, '')
  const zone = shipping.zones.reduce((zone, districtRange) => {
    const key = Object.keys(districtRange)[0]
    const range = key.split('-')
    if (range.length === 1 && range[0] === district) return districtRange[key]
    if (district > range[0] && district < range[1]) return districtRange[key]
    return zone
  }, 0)
  return {
    placeName: shipping.placeName,
    zone: zone
  }
}
