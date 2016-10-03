# price-parse

Simply parse a string of text and return a price if found. If a price cannot be found, `NaN` will be
returned.

## Quick start guide

Install price-parse

```sh
npm install --save price-parse
```

## Usage

```js
const priceParse = require('price-parse');

priceParse('$15.00'); // 15
priceParse('Price is $22.50'); // 22.50
```
