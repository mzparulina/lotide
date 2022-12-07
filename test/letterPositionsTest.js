const { assert } = require("chai");
const letterPositions = require("../letterPositions");

describe("#flatten", () => {
  it("should return [ 1, 11 ] for letterPositions('lighthouse in the house').i", () => {
    assert.deepEqual(letterPositions('lighthouse in the house').i, [ 1, 11 ]);
  });
  it("should return [ 2, 3 ] for letterPositions('hello').l", () => {
    assert.deepEqual(letterPositions('hello').l, [ 2, 3 ]);
  });
  it("should return [1] for letterPositions('hello').e", () => {
    assert.deepEqual(letterPositions("hello").e, [1]);
  });
});
