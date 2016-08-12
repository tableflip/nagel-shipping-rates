var Postcode = require('postcode')
var lookup = require('./postcodeZones.json')

module.exports = function (postcodeString) {
  var postcode = new Postcode(postcodeString)
  var area = postcode.area()
  var shipping = lookup[area]
  if (!shipping) throw new Error(postcodeString + ' is not in a zone')
  if (shipping.zone) return shipping
  var district = postcode.district().replace(/^[a-z]*/i, '')
  var zone = shipping.zones.reduce(function (zone, districtRange) {
    var key = Object.keys(districtRange)[0]
    var range = key.split('-')
    if (range.length === 1 && range[0] === district) return districtRange[key]
    if (district >= range[0] && district <= range[1]) return districtRange[key]
    return zone
  }, 0)
  return {
    placeName: shipping.placeName,
    zone: zone
  }
}
