const fs = require('fs');

console.log('Start');

process.nextTick(() => {
    console.log('Next tick callback');
});

setTimeout(() => {
    console.log('Timeout callback');
}, 0);

fs.readFile('example.txt', () => {
    console.log('File read callback');
});

setImmediate(() => {
    console.log('Immediate callback');
});

console.log('End');
    