const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const key = sentence[i];
    if (results[key])
      results[key].push(i);
    else
      results[key] = [i];
  }
  
  return results;
};

module.exports = letterPositions;