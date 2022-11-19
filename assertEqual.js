const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected && actual && expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamps", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2.2);
assertEqual();