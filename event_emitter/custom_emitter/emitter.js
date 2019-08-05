function Emitter() {
  this.events = {};
}
// keep pushing listener function 
// in to the event object for a particular type
Emitter.prototype.on = function (type, listener) {
  this.events[type] = this.events[type] || [];
  this.events[type].push(listener);
}

// like how click triggers all onclick functions defined
// emit is called on trigger when some action happens
Emitter.prototype.emit = function (type) {
  if (this.events[type]) {
    this.events[type].forEach(function (listener) {
      listener();
    });
  }
}

module.exports = Emitter;