const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

const countLetters = function(words) {
  let obj = {};
  for (let char of words) {
    if (obj[char])
      obj[char] += 1;
    else
      obj[char] = 1;
  }
  return obj;

};

console.log(countLetters('Bootcamp'));

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual("Bootcamps", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2.2);
// assertEqual();