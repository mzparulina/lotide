// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1).sort();
  let obj2 = Object.keys(object2).sort();

  if (obj1.length === obj2.length) {
    return obj1.every(obj => {
      return obj2.indexOf(obj) >= 0;
    });
  }

  return false;
};

module.exports = eqObjects;