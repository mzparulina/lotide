const flatten = function(arr) {
  return [].concat(...arr);
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]