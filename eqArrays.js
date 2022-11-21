const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected && actual && expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    // Comparing each element of your array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should PASS