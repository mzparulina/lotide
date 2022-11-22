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

const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    newArr = [];
  } else {
    if (arr.length % 2 !== 0)
      newArr = [arr[(arr.length - 1) / 2]];
    else
      newArr = [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
  }
  return newArr;
};

// TEST CODE
// ...
middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
console.log('--------')
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]),[2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]),[2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4])