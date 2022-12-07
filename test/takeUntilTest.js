const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

const data2 = ['Ive', 'been', 'to', 'Hollywood', ',', 'Ive', 'been', 'to', 'Redwood'];
const results2 = takeUntil(data2, x => x === ',');

describe("#takeUntil", () => {
  it("returns takeUntil(data1, x => x < 0) for [1, 2, 5, 7, 2, -1, 2, 4, 5]", () => {
    assert.deepEqual(results1, [ 1, 2, 5, 7, 2 ]);
  });
  it("returns takeUntil(data2, x => x === ',') for ['Ive', 'been', 'to', 'Hollywood', ',', 'Ive', 'been', 'to', 'Redwood']", () => {
    assert.deepEqual(results2, [ 'Ive', 'been', 'to', 'Hollywood']);
  });
});