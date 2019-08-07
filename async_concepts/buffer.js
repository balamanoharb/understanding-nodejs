// new Buffer(number)            // Old
// Buffer.alloc(number)          // New

// new Buffer(string)            // Old
// Buffer.from(string)           // New

// new Buffer(string, encoding)  // Old
// Buffer.from(string, encoding) // New

// new Buffer(...arguments)      // Old
// Buffer.from(...arguments)     // New

var buf = Buffer.from("Hello", 'utf-8')
console.log(buf);
console.log(buf.toString());
console.log(buf.toJSON());
console.log(buf[2]);

buf.write('Hi There');
// buf is a fixed size when created
console.log(buf.toString());