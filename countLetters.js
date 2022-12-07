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

module.exports = countLetters;