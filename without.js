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


const without = function(source, itemsToRemove) {
  for (let x = source.length - 1; x >= 0; x--) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        source.splice(x, 1);
      }
    }
  }
  console.log(source);
};


// TEST CODE
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);