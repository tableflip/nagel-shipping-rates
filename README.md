# Nagel Group Shipping rates

`npm install`

`npm run test`

Exports helper functions that help look up zones and rates from the [Nagel Group Rate Card](https://drive.google.com/file/d/0ByulP-RjHNpdNndzTFdSd2ZGaXM/view).

```
const shipping = require('nagel-shipping-rates')

shipping.getZone('SE22 9BA')
// 5

// shipping.getRate(departureZone, deliveryZone, pallets)
shipping.getRate(5, 3, 1)
// 71.31
```
