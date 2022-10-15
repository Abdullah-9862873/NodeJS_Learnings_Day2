// First of all we need to import the os


//______________________________________________________________________
const os = require('os');
//______________________________________________________________________


// The following code will print the free memory in your computer

//______________________________________________________________________
console.log(os.freemem());
//______________________________________________________________________



// The following will give you the root directory

console.log(os.homedir());

// Host name

console.log(os.hostname());


console.log(os.platform());
console.log(os.release());
console.log(os.type());
console.log(os.networkInterfaces());