function greet(callback) {
  console.log('Hello!!')
  var data = {
    name: 'John Doe'
  };
  callback(data)
}

greet(function (data) {
  console.log('Invoked callback');
  console.log(data.name)
})

greet(function (data) {
  console.log('Invoked a different callback');
  console.log(data);
})
