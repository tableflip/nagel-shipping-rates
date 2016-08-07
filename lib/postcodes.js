const Postcode = require('postcode')
const lookup = require('./postcodeZones.json')

module.exports = (postcodeString) => {
  const postcode = new Postcode(postcodeString)
  const area = postcode.area()
  const shipping = lookup[area]
  if (shipping.zone) return shipping
  if (shipping.zones) {
    const district = postcode.district().replace(/^[a-z]*/i, '')
    const singleDigitDistrictMatch = shipping.zones.filter((zone) => zone[district])
    if (singleDigitDistrictMatch.length > 1) {
      shipping.zone = singleDigitDistrictMatch[0][district]
    } else {

    }
    return shipping
  }
}
