// import { readFile } from "fs";

// const cache = new Map();

// function inconsistentRead(filename, cb) {
//   if (cache.has(filename)) {
//     cb(cache.get(filename));
//   } else {
//     readFile(filename, "utf8", (_error, data) => {
//       cb(data);
//     });
//   }
// }

// // function add(a, b) {
// //   return a + b;
// // }

// // function addCps(a, b, callback) {
// //   callback(a + b);
// // }

// // console.log("Before");
// // addCps(1, 2, result => console.log(`Results: ${result}`));
// // console.log("After");

// // const result = [1, 5, 7].map(element => element - 1);
// // console.log(result);

// // // import fs from "fs";
// // // import {
// // //   mockEnable,
// // //   mockDisable
// // // } from "./mock-read-file.js";

// // // mockEnable(Buffer.from("Hello World"));

// // // fs.readFile("fake-path", (err, data) => {
// // //   if (err) {
// // //     console.log(err);
// // //     process.exit(1);
// // //   }

  
// // // })

// // // // import * as loggerModule from "./logger";
// // // // console.log(loggerModule);

// // // // // const Logger = require("./logger");

// // // // // const dbLogger = new Logger("DB");
// // // // // dbLogger.info("This is an infomation message");
// // // // // const accessLogger = new Logger("ACCESS");
// // // // // accessLogger.verbose("This is a verbose message");

// // // // // // const logger = require("./logger");

// // // // // // logger("Normal system");
// // // // // // logger.info("This is infomation system");
// // // // // // logger.verbose("This is a verbose message");