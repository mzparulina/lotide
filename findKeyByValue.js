const findKeyByValue =  function(actual, expected) {
  let keys = Object.keys(actual);
  for (let key of keys) {
    if (actual[key] === expected)
      return key;
  }
  return;
};

module.exports = findKeyByValue;