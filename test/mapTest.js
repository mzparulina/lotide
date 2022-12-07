const map = require('../map');
const assert = require('chai').assert;

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word);

describe("#map", () => {
  it("returns array for the [ground, control, to, major, tom]", () => {
    assert.deepEqual(words, results1);
  });
});