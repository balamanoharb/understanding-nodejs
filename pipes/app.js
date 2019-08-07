// streams inherit event emitters
// so basically they are even emitters
// there are

var fs = require('fs');
var zlib = require('zlib')

var readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compress = zlib.createGzip();

var zipped = fs.createWriteStream(__dirname + '/greetcopy.txt.gz')

// copy to another file
readable.pipe(writable);

// compress and pipe it to a file
readable.pipe(compress).pipe(zipped);