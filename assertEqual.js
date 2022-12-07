const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

module.exports = assertEqual;