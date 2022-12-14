const findKey = require('../findKey');
const assert = require('chai').assert;

const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1); // => "noma"

describe("#findKey", () => {
  it("returns Blue Hill for the const key", () => {
    assert.strictEqual(key, "Blue Hill");
  });
});