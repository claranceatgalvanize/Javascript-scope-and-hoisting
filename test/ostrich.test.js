var chai = require('chai')
var assert = chai.assert
var ostrich = require('../src/ostrich')

// Listen for console.log statements
require('mocha-sinon')
function stubFn () { this.sinon.stub(console, 'log') }

describe('ostrich function', function () {
  beforeEach(stubFn)

  it('should not throw an error', function () {
    var fn = function () { ostrich() }
    assert.doesNotThrow(fn, Error)
  })

  it('should log the correct statements', function () {
    ostrich()

    assert.isOk(console.log.calledWith('The ostrich is running away...'))
    assert.isOk(console.log.calledWith('Ostriches actually do not do this.'))
  })
})
