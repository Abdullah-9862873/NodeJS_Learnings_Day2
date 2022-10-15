const path = require('node:path');

const a1 = path.basename('C:\\temp\\myfile.html');
console.log(a1);

const a2 = path.dirname('C:\\temp\\myfile.html');
console.log(a2);


// The following will give the extension of the current filw which is pathmodule.js

const a3 = path.extname(__filename);
console.log(a3);
