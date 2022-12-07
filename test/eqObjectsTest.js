const { assert } = require("chai");
const eqObjects = require("../eqObjects");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

describe("#eqObjects", () => {
  it("should return true for (shirtObject , anotherShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject , anotherShirtObject), true);
  });
  it("should return false for (shirtObject , longSleeveShirtObject)", () => {
    assert.deepEqual(eqObjects(shirtObject , longSleeveShirtObject), false);
  });
  it("should return true for (multiColorShirtObject , anotherMultiColorShirtObject)", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
  });
  it("should return false for (multiColorShirtObject , longSleeveMultiColorShirtObject)", () => {
    assert.deepEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);
  });
});