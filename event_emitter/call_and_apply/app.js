var obj = {
  name: 'Jon Snow',
  greet: function (param) {
    console.log(`Hello ${this.name}`);
  }
}

obj.greet();
// call this function using the object I pass
obj.greet.call({ name: 'John Doe' }, 'arg1', 'arg2')
obj.greet.apply({ name: 'Kalesi' }, ['arg1', 'arg2'])
// only difference between call and apply is the way to pass arguments