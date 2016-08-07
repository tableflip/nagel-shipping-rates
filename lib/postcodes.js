const Postcode = require('postcode')
const lookup = require('./postcodeZones.json')

module.exports = (postcodeString) => {
  const postcode = new Postcode(postcodeString)
  const area = postcode.area()
  // const district = postcode.district().replace(/^[a-z]*/i, '')
  const zone = lookup[area]
  if (zone.zone) return zone
  console.log(zone)
  return 5
}
