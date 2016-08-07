const test = require('tape')
const getShipping = require('../index')
const zones = require('../lib/zones')

test('should return a shipping rate', (t) => {
  t.plan(1)
  const rate = getShipping(1, 1, 1)
  t.equal(rate, 68.41, 'That will be £68.41')
  t.end()
})

test('zones is made of a 24 by 24 table', (t) => {
  t.plan(2)
  t.ok(zones.every((zone) => zone.length === 24), 'the zone table is made of 24 columns')
  t.equal(zones.length, 24, 'and 24 rows')
  t.end()
})

test('should return an error for invalid departureZones', (t) => {
  const err = getShipping(30, 1, 1)
  t.plan(2)
  t.ok(err)
  t.equal(err.message, '30 is not a valid departureZone', '30 is not a valid departureZone')
  t.end()
})

test('should return an error for invalid deliveryZones', (t) => {
  const err = getShipping(1, 31, 1)
  t.plan(1)
  t.equal(err.message, '31 is not a valid deliveryZone', '31 is not a valid deliveryZone')
  t.end()
})

test('some shipping zones are not supported', (t) => {
  const err = getShipping(16, 16, 1)
  t.plan(1)
  t.equal(err.message, 'POA - Prices available on application', 'POA - Prices available on application')
  t.end()
})
