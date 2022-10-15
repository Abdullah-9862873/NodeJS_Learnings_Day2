const fs = require('fs');

// fs.readFile('file.txt', 'UTF8', (err, data)=>{
//     console.log(err, data);
// })


// console.log("Finished reading file");

// Here the "Finished reading file" will get printed first and then the file has completed reading

// And here comes the concept of Asynchronus JS, EventLoop, Non-Blocking IO

//_____________________________________________________________________

// To read the file in synchronus way we can use

// const a = fs.readFileSync("file.txt");
// console.log(a);
// console.log(a.toString());
// console.log("Finished reading file");

//______________________________________________________________________

// Same is the case with write file

// fs.writeFile("file2.txt", "This is second file data", ()=>{
//     console.log("Written successfully");
// });

// console.log("Finished Writing");

//________________________________________________________________

fs.writeFileSync("file3.txt", "This is third data");

console.log("Finished writing third file");
