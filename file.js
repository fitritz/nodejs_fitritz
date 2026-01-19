const fs = require('fs');
const data = fs.readFileSync('read.txt', 'utf8');
console.log(data);
fs.appendFileSync('read.txt', 'hello aditi');
console.log('Data appended!');
console.log