const fs = require('fs');

const { processingOptions } = require('./src/processingOptions');
const { createCipherStream } = require('./src/cipherStream');

const options = processingOptions();
const { shift, action, input, output } = options;

let readStream = null;
let outputStream = null;
const cipherStream = createCipherStream(action, shift);
process.stdin.setEncoding('utf8');

if (input && output) {
  readStream = fs.createReadStream(input);
  outputStream = fs.createWriteStream(output);
} else if (input && !output) {
  readStream = fs.createReadStream(input);
  outputStream = process.stdout;
} else if (!input && !output) {
  console.log('Enter the string: ');
  readStream = process.stdin;
  outputStream = process.stdout;
} else if (!input && output) {
  readStream = process.stdin;
  outputStream = fs.createWriteStream(output, { flags: 'a+' });
}
readStream.pipe(cipherStream).pipe(outputStream);
