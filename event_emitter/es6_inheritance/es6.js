var EventEmitter = require("events");

class Greeter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello World"
  }
  greet(data) {
    console.log(this.greeting);
    this.emit('greet', data);
  }
}

var greeter1 = new Greeter();

greeter1.on('greet', function (name) {
  console.log('Someone greeted ' + name);
})

greeter1.greet('John');