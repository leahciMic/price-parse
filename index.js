module.exports = function parsePrice(price) {
  const parsedPrice = String(price).replace(/[$,]/g, '').match(/-?\s*[\d\.]+/);
  if (parsedPrice === null) {
    return NaN;
  }
  return parseFloat(
    parsedPrice, 10
  );
}
