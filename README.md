# Nagel Group Shipping rates [![CircleCI](https://circleci.com/gh/tableflip/nagel-shipping-rates.svg?style=svg&circle-token=7ad906109fd0521a92193b2cbcb2e8972194807a)](https://circleci.com/gh/tableflip/nagel-shipping-rates)

![](https://www1.picturepush.com/photo/a/15009430/640/Nieuwsfoto's-11/Nagel-Group.jpg?v0)

### Getting Started

`npm install`

`npm run test`

Exports helper functions that help look up zones and rates from the [Nagel Group Rate Card](https://drive.google.com/file/d/0ByulP-RjHNpdNndzTFdSd2ZGaXM/view).

### Usage

```js
const shipping = require('nagel-shipping-rates')

shipping.getZone('SE22 9BA')
// 5

// shipping.getRate(departureZone, deliveryZone, pallets)
shipping.getRate(5, 3, 1)
// 71.31
```
