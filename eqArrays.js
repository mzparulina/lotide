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

module.exports = eqArrays;