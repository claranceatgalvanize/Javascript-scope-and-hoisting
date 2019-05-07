var chai = require('chai')
var assert = chai.assert
var narwhal = require('../src/narwhal')

describe('narwhal function', function () {
  it('should return words of encouragement', function () {
    var result = 'Bye Buddy! Hope you find your Dad!'
    assert.equal(narwhal, result)
  })
})
