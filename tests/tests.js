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
  t.ok(Object.keys(zones).every((zone) => zones[zone].length === 24), 'the zone table is made of 24 columns')
  t.equal(Object.keys(zones).length, 24, 'and 24 rows')
  t.end()
})
