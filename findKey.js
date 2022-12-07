const findKey = function(actual, callback) {
  let keys = Object.keys(actual);
  for (let key of keys) {
    if (callback(actual[key]))
      return key;
  }
  return;
};

module.exports = findKey;