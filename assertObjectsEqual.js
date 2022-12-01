const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1).sort();
  let obj2 = Object.keys(object2).sort();

  if (obj1.length === obj2.length) {
    return obj1.every(obj => {
      return obj2.indexOf(obj) >= 0;
    });
  }

  return false;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let log = '';
  if (eqObjects(actual, expected))
    log += `✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`;
  else
    log += `🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  return log;
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(assertObjectsEqual(shirtObject , anotherShirtObject));

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
console.log(assertObjectsEqual(shirtObject , longSleeveShirtObject));