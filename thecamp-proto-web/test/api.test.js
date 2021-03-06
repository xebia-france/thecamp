const assert = require('assert');

describe('Array', () => {
  it('should return -1 when the value is not present', () => {
    assert.equal(-1, [1, 2, 3].indexOf(4));
  });

  it('should have a length of 3', () => {
    assert.equal(3, [1, 2, 3].length);
  });
});
