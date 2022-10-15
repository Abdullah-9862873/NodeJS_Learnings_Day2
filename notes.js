// In order to run the current project via node in terminal type

//______________________________________________________________________
//   node index.js
//______________________________________________________________________

// In order to initialise the node package we type


//______________________________________________________________________
//      node init
//______________________________________________________________________

// npm---> Node package manager is a package manager which allows the user to download packages 

// To download package we have to write let's say of express 
// This will create a folder named "node modules"

// node modules have all the dependencies from the internet and you can get it using "npm install" ot simply "npm i"... 

//______________________________________________________________________
//      npm intall express --save
//______________________________________________________________________

// To install a package let's say "nodemon" globally you have to type

//______________________________________________________________________
//      npm install -g nodemon
//______________________________________________________________________


// And now you can run the index.js using nodemon and it will be like
// The beautiful thing about nodemon is that it grabs the changes done in a file
// Lets say you changed Hello World to Hell World then it will automatically take the change and now when you type "nodemon index.js" it will get the new thing

//______________________________________________________________________
// nodemon index.js
//______________________________________________________________________

// If you want to add a package for dev-dependency only... That means that if you want the package for development purposes only then
// This will install nodemon for development purposes only

//______________________________________________________________________
//  npm install --save-dev nodemon
//______________________________________________________________________


// You can uninstall a package too by

//______________________________________________________________________
// npm uninstall nodemon
//______________________________________________________________________

// The file which is exporting something is common js module and in this case "second.js" is a common js module

// Nodejs automatically wraps a function in module wrapper function and the function is 

//______________________________________________________________________
//  function(exports, require, modules, __filename, __dirname){
    // Abdullah = {
    //     name : "Abdullah",
    //     age : 20,
    //     developer : true,
    // };
    
    // module.exports = Abdullah; 
//  }
//______________________________________________________________________


// To see the stuff go and write the following in second.js


//______________________________________________________________________
// console.log(exports, require, module, __filename, __dirname)
//______________________________________________________________________

// Difference between common js modules and ecma script modules

//  1--> You can import and export common js modules using "require" and "modules.exports"... BUt you cannot do this
//      in ecma script modules which have the extension ".mjs"

//___________________________________________________________________________

// Now while working with .mjs you have to type the exact name in the import section that you type while making the function you want to export in the .mjs file...
// So in order to deal with it you can use "default"... This will set the default and now the default will get export everytime if anything else doesn't get exported...
// You can import default by any name....

//_____________________________________________________________________________

// Now I have to restart the server everytime even if I make a small change in my server.... But if I use
//   nodemon then I don't have to restart the server everytime I make small changes...
//_____________________________________________________________________________


//  package-lock json ----> If you have installed let's say express and let's say express depends on 15 other packages

// package-lock json will have all the required versions of the required dependent packages...