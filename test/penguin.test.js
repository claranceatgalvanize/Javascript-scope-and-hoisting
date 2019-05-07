var chai = require('chai')
var assert = chai.assert
var penguin = require('../src/penguin')

describe('penguin function', function () {
  it('should not throw an error', function () {
    var fn = function () { penguin() }
    assert.doesNotThrow(fn, Error)
  })

  it('should return the correct statements', function () {
    var actual = penguin('Gunther')
    var expected = 'Hello, my name is Gunther'

    assert.equal(actual, expected)
  })
})
