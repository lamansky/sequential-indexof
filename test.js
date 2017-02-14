'use strict'

const assert = require('assert')
const sequentialIndexOf = require('.')

describe('sequentialIndexOf()', function () {
  it('should sequentially return array element indices', function () {
    const indexOf = sequentialIndexOf([1, 2, 1, 2, 1])
    assert.strictEqual(indexOf(1), 0)
    assert.strictEqual(indexOf(1), 2)
    assert.strictEqual(indexOf(1), 4)
    assert.strictEqual(indexOf(1), -1)
    assert.strictEqual(indexOf(2), 1)
    assert.strictEqual(indexOf(2), 3)
    assert.strictEqual(indexOf(2), -1)
  })

  it('should return -1 for an element not in the array', function () {
    const indexOf = sequentialIndexOf([1, 1, 1])
    assert.strictEqual(indexOf(2), -1)
    assert.strictEqual(indexOf(2), -1)
  })

  it('should sequentially return substring indices', function () {
    const indexOf = sequentialIndexOf('test test')
    assert.strictEqual(indexOf('test'), 0)
    assert.strictEqual(indexOf('test'), 5)
    assert.strictEqual(indexOf('test'), -1)
  })

  it('should return -1 for a substring not in the string', function () {
    const indexOf = sequentialIndexOf('test test')
    assert.strictEqual(indexOf('testing'), -1)
    assert.strictEqual(indexOf('testing'), -1)
  })
})
