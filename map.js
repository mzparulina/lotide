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

const assertArraysEqual = function(arr1, arr2) {
  let equals = eqArrays(arr1, arr2);
  let log = '';
  if (equals)
    log += `✅  Assertion passed: ${arr1} === ${arr2}`;
  else
    log += `🛑  Assertion failed: ${arr1} !== ${arr2}`;
  return console.log(log);
};

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word);

assertArraysEqual(words, results1);
console.log(results1);