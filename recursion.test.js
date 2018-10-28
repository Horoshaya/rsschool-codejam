const assert = require('assert');
const recursion = require('./recursion');

describe('Recursion', () => {
  it('1', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
        },
        right: {
          value: 99,
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
        },
        right: {
          value: 130,
        },
      },
    };
    const expected = [[100], [90, 120], [70, 99, 110, 130]];
    const result = recursion(tree);
    if (assert.deepEqual(result, [[100], [90, 120], [70, 99, 110, 130]])) {
      throw new Error(`Expected ${expected}, but got ${result}`);
    }
  });

  it('2', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: {
          value: 70,
          left: {
            value: 60,
          },
          right: {
            value: 80,
          },
        },
        right: {
          value: 99,
          left: {
            value: 95,
          },
          right: {
            value: 101,
          },
        },
      },
      right: {
        value: 120,
        left: {
          value: 110,
          left: {
            value: 103,
          },
          right: {
            value: 112,
          },
        },
        right: {
          value: 130,
          left: {
            value: 125,
          },
          right: {
            value: 133,
          },
        },
      },
    };
    const expected = [[100], [90, 120], [70, 99, 110, 130], [60, 80, 95, 101, 103, 112, 125, 133]];
    const result = recursion(tree);
    if (assert.deepEqual(result, expected)) {
      throw new Error(`Expected ${expected}, but got ${result}`);
    }
  });
});
