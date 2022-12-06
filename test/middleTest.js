const middle = require('../middle');
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns 2 elements", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns 'Lighthouse' for 'Lighthouse'", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("returns 'Labs' for 'Labs'", () => {
    assert.deepEqual(middle([1, 2, 3]),[2]);
  });

  it("returns 'Lighthouse' for 'Lighthouse'", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("returns 'Labs' for 'Labs'", () => {
    assert.deepEqual(middle([1, 2, 3, 4]),[2, 3]);
  });

  it("returns 'Labs' for 'Labs'", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
  });
});