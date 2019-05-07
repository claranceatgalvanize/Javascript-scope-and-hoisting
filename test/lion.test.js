var chai = require('chai')
var assert = chai.assert
var lion = require('../src/lion')

describe('lion function', function () {
  it('should return the right sound for a lion', function () {
    var result = 'The lion goes, "ROAR!"'
    assert.equal(lion, result)
  })
})
