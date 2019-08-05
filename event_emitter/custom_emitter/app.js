var Emitter = require('./emitter')
// to use nodes native event emitter all we have to do is
// remove the ./
var eventConfig = require('./eventConfig')

var emtr = new Emitter();
emtr.on(eventConfig.GREET, function () {
  console.log("Hello was triggered!!!");
})

emtr.on(eventConfig.GREET, function () {
  console.log("Hello there...")
})

console.log('triggering event greet')
emtr.emit(eventConfig.GREET);