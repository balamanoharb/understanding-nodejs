var fs = require('fs');

// reading a file synchronously
// without char encoding it will print raw binary.
var file = fs.readFileSync(__dirname + '/file.txt', 'utf-8')
console.log(file)

fs.readFile(__dirname + '/file.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log("Error!!!");
    return;
  }
  console.log(data);
})

// this will be printed before the async call
console.log('Done!!!')
