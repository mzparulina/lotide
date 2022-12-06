const middle = function(arr) {
  let newArr = [];
  if (arr.length <= 2) {
    newArr = [];
  } else {
    if (arr.length % 2 !== 0)
      newArr = [arr[(arr.length - 1) / 2]];
    else
      newArr = [arr[(arr.length / 2) - 1], arr[arr.length / 2]];
  }
  return newArr;
};

module.exports = middle;