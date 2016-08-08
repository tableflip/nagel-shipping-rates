# Nagel Group Shipping rates

`npm install`

`npm run test`

Exports a function that takes a departure postcode, a delivery postcode and the number of pallets you want a price for.

```
const getShipping = require('nagel-shipping-rates')

getShipping('SE22 9BA', 'BL4 IY8', 3)

// 71.31
```

### A Postcode is made up of the following elements:
#### PO1 3AX
PO the area. There are 124 postcode areas in the UK
1 the district. There are approximately 20 Postcode districts in an area
3 the sector. There are approximately 3000 addresses in a sector.
AX the Unit. There are approximately 15 addresses per unit.
The following list shows all valid Postcode formats. "A" indicates an alphabetic character and "N" indicates a numeric
character.
#### FORMAT EXAMPLE
*AN* NAA M1 1AA
*ANN* NAA M60 1NW
*AAN* NAA CR2 6XH
*AANN* NAA DN55 1PT
*ANA* NAA W1A 1HQ
*AANA* NAA EC1A 1BB
