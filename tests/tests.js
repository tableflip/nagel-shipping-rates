const test = require('tape')
const getShipping = require('../index.js')

test('should return a shipping rate', function (t) {
  t.plan(1)
  const rate = getShipping(1, 1, 1)
  t.equal(rate, 68.41, 'That will be £68.41')
  t.end()
})
