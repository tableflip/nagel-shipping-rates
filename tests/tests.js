const test = require('tape')
const getShipping = require('../lib/getRate')
const zones = require('../lib/zones')
const getZone = require('../lib/getZone')

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

test('should throw an error for invalid departureZones', (t) => {
  t.plan(1)
  t.throws(() => { getShipping(30, 1, 1) }, /30 is not a valid departureZone/)
  t.end()
})

test('should throw an error for invalid deliveryZones', (t) => {
  t.plan(1)
  t.throws(() => { getShipping(1, 31, 1) }, /31 is not a valid deliveryZone/)
  t.end()
})

test('should throw an error for invalid pallet numbers', (t) => {
  t.plan(1)
  t.throws(() => { getShipping(1, 1, 15) }, /max pallet number is 14/)
  t.end()
})

test('should default to 1 pallet is none supplied', (t) => {
  const rate = getShipping(1, 1)
  t.plan(1)
  t.equal(rate, 68.41, 'ok i guess you mean 1 pallet')
  t.end()
})

test('should handle pallets between 10 and 14', (t) => {
  const rate = getShipping(1, 1, 13)
  t.plan(1)
  t.equal(rate, 23.25, '13 is correctly recast to 10 for rate lookup')
  t.end()
})

test('some shipping zones are not supported', (t) => {
  t.plan(1)
  t.throws(() => { getShipping(16, 16, 1) }, /POA - Prices available on application/)
  t.end()
})

test('should be able to lookup postcodes with Double area codes', (t) => {
  const shipping = getZone('B2 9BA')
  t.plan(4)
  t.equal(typeof shipping, 'object', 'postcode module returns an object')
  t.ok(shipping.placeName, 'with a placeName')
  t.ok(shipping.zone, 'and a zone')
  t.equal(shipping.zone, 23, 'Birmingham is in zone 23')
  t.end()
})

test('should be able to lookup sub districts that are a single value', (t) => {
  const shipping = getZone('BL5 9BA')
  t.plan(1)
  t.equal(shipping.zone, 10, 'Bolton BL5 is in zone 10')
  t.end()
})

test('should be able to lookup sub districts in a range', (t) => {
  const shipping = getZone('BL1 9BA')
  t.plan(1)
  t.equal(shipping.zone, 11, 'Bolton BL1 is in zone 11')
  t.end()
})
