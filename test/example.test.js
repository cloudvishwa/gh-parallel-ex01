const { sum } = require('../src/index');
const assert = require('assert');

describe('sum()', function() {
  it('adds two numbers', function() {
    assert.strictEqual(sum(2, 3), 5);
    assert.strictEqual(sum(-1, 1), 0);
  });
});
