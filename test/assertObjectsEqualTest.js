const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject , anotherShirtObject));

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertObjectsEqual(shirtObject , longSleeveShirtObject));