// const simple = require("./modulesecond");
// simple();

// import {simple10 as simple} from "./modulesecond.mjs";
// simple();

// import simple from "./modulesecond.mjs";
// simple();

//__________________________________________________________
// You can import everything by typing "*"

import * as a2 from "./modulesecond.mjs";
console.log(a2);
console.log(a2.simple10());