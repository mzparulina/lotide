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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];
    if (results[key])
      results[key].push(i);
    else
      results[key] = [i];
  }
  
  return results;
};

console.log(letterPositions('lighthouse in the house'));
console.log(letterPositions('hello'));
assertArraysEqual(letterPositions("hello").e, [1]);