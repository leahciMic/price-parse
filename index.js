module.exports = function parsePrice(price) {
  return parseFloat(
    String(price).match(/[\d\.]+/)[0], 10
  );
}
