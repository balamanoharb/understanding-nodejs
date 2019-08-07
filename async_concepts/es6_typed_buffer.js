// 8 bytes
var buffer = new ArrayBuffer(8);
// store as 32 bit numbers
var view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;
// 30 will be ignored since it exceeds the buffer size
view[2] = 30;
console.log(view);