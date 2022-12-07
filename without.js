const without = function(source, itemsToRemove) {
  for (let x = source.length - 1; x >= 0; x--) {
    for (let y = 0; y < itemsToRemove.length; y++) {
      if (source[x] === itemsToRemove[y]) {
        source.splice(x, 1);
      }
    }
  }
  return source;
};

module.exports = without;