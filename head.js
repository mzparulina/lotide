const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected && actual && expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

const head = function(arr) {
  return arr[0];
};

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");