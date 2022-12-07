const eqArrays = function(arr1, arr2) {

  let output = true;
  if (arr1.length !== arr2.length) return false;

  for (let x = 0; x < arr1.length; x++) {
    if (Array.isArray(arr1[x]) || Array.isArray(arr2[x])) {
      output = output && eqArrays(arr1[x], arr2[x]);
    } else if (arr1[x] !== arr2[x]) {
      output = output && false;
    }
  }
  return output;
};

module.exports = eqArrays;