function Greeter() {
  this.value = "Hello !!!"
  this.greet = function () {
    console.log(this.value);
  }
}

module.exports = new Greeter();