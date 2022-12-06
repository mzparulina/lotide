const tail = require('../tail');
const assert = require('chai').assert;

const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns 2 elements", () => {
    assert.strictEqual(result.length, 2);
  });

  it("returns 'Lighthouse' for 'Lighthouse'", () => {
    assert.strictEqual(result[0], 'Lighthouse');
  });

  it("returns 'Labs' for 'Labs'", () => {
    assert.strictEqual(result[1], 'Labs');
  });
});