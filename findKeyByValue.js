const assertEqual = function(actual, expected) {
  let log = '';
  if (actual === expected)
    log += `✅  Assertion passed: ${actual} === ${expected}`;
  else
    log += `🛑  Assertion failed: ${actual} !== ${expected}`;
  return console.log(log);
};

const findKeyByValue =  function(actual, expected) {
  let keys = Object.keys(actual);
  for (let key of keys) {
    if (actual[key] === expected)
      return key;
  }
  return;
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


// TEST CODE

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);