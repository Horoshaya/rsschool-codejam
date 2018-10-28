const make = require('./make');

function sum(a, b) {
  return a + b;
}

function division(a, b) {
  return a / b;
}

describe('Make', () => {
  it('1', () => {
    const res = make(15)(34, 21, 666)(41)(sum);
    const expected = 777;
    if (res !== expected) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });

  it('2', () => {
    const res = make(200)(2, 5)(20)(division);
    const expected = 1;
    if (res !== expected) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });

  it('3', () => {
    const res = make()(2, 5)(20)(20)(40)(20)(6)(20)(134, 78, 90)(20)(124)(2)(7)(12)(sum);
    const expected = 600;
    if (res !== expected) {
      throw new Error(`Expected ${expected}, but got ${res}`);
    }
  });
});
