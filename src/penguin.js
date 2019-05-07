// Yikes, this code doesn't work at all. Make as few changes as possible
// to the below code to get the correct statement to return.

var penguin = function (name) {
  return (penguin = (function speak () {
    return 'Hello, my name is ' + name
  })())
}

module.exports = penguin
