var Fs = require('fs');

Fs.createReadStream('santa.txt').pipe(process.stdout);