var chai = require('chai')
var assert = chai.assert
var monkey = require('../src/monkey')

describe('monkey function', function () {
  it('should return a very wise phrase', function () {
    var result = 'See No Evil; Hear No Evil; Speak No Evil.'
    assert.equal(monkey, result)
  })
})
