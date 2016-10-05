const assert = require('assert');
const priceParse = require('../index.js');

describe('Price parse', function() {
  const prices = [
    ['$1.00', 1],
    ['$1.10', 1.1],
    ['$01.00', 1],
    ['$100.65', 100.65],
    ['200.07', 200.07],
    ['  201.11', 201.11],
    ['  $210.51', 210.51],
    [' 201.11 Blah', 201.11],
    ['The price is $450.10', 450.1],
    ['$300.531', 300.531],
    [' z$511.311', 511.311],
    ['The price is $50.10 or $41.80', 50.10],
    ['A range of prices could look like $10.15 - $201.45', 10.15],
    ['No price', NaN],
    [{}, NaN],
    [true, NaN],
    [false, NaN],
    [11.45, 11.45],
    [-100.45, -100.45],
    ['-10.41', -10.41],
    ['-$10.41', -10.41],
    ['-$1050.10 - $5100', -1050.10],
    ['$1,300', 1300],
    ['-$1,300', -1300],
    ['$-1,300', -1300]
  ];

  prices.forEach(([str, expected]) => {
    it(`should get ${expected} for "${str}"`, () => {
      if (isNaN(expected)) {
        assert(isNaN(priceParse(str)), `Expected ${priceParse(str)} to equal NaN`);
        return;
      }
      assert.equal(priceParse(str), expected);
    });
  });
});
