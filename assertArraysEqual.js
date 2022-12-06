const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arr1, arr2) {
  let equals = eqArrays(arr1, arr2);
  let log = '';
  if (equals)
    log += `✅  Assertion passed: ${arr1} === ${arr2}`;
  else
    log += `🛑  Assertion failed: ${arr1} !== ${arr2}`;
  return console.log(log);
};

// TEST CODE
assertArraysEqual(["1", "2", "3"], ["1", "2", '3']);