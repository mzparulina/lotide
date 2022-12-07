const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;

  let log = '';
  if (eqObjects(actual, expected))
    log += `✅  Assertion passed: ${inspect(actual)} === ${inspect(expected)}`;
  else
    log += `🛑  Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`;
  return log;
};

module.exports = assertObjectsEqual;