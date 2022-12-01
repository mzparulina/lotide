const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

const findKey = function(actual, callback) {
  let keys = Object.keys(actual);
  for (let key of keys) {
    if (callback(actual[key]))
      return key;
  }
  return;
};

// TEST CODE
const key = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1); // => "noma"

assertEqual(key, "Blue Hill");