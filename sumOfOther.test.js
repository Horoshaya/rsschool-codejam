const sumOfOther = require('./sumOfOther');

describe('SumOfOther', () => {
  it('1', () => {
    const res = sumOfOther([2, 4, 6, 8]);
    const expected = [18, 16, 14, 12];
    if (JSON.stringify(res) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });

  it('2', () => {
    const res = sumOfOther([2, 5, 7, 14, 25, 35, 76, 34, 56, 12, 45]);
    const expected = [309, 306, 304, 297, 286, 276, 235, 277, 255, 299, 266];
    if (JSON.stringify(res) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });

  it('3', () => {
    const res = sumOfOther([4, 56, 74, 3, 54, 67, 4, 64, 5, 45, 24]);
    const expected = [396, 344, 326, 397, 346, 333, 396, 336, 395, 355, 376];
    if (JSON.stringify(res) !== JSON.stringify(expected)) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });
});
