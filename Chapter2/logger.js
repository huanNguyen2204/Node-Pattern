export function log (message) {
  console.log(message);
};

export const DEFAULT_LEVEL = "info";

export const LEVELS = {
  error: 0,
  debug: 1,
  warn: 2,
  data: 3,
  info: 4,
  verbose: 5
}

export class Logger {
  constructor(name) {
    this.name = name;
  }

  log(message) {
    console.log(`[${this.name} ${message}]`);
  }
}

// class Logger {
//   constructor(name) {
//     this.name = name;
//   }

//   log (message) {
//     console.log(`[${this.name}] ${message}`);
//   }

//   info (message) {
//     this.log(`info ${message}`);
//   }

//   verbose (message) {
//     this.log(`verbose: ${message}`);
//   }
// }

// module.exports = Logger;

// // exports.info = (message) => {
// //   console.log(`info: ${message}`);
// // };

// // exports.verbose = (message) => {
// //   console.log(`verbose: ${message}`);
// // };

// // module.exports.verbose2 = (message) => {
// //   console.log(`verbose: ${message}`);
// // };

// // module.exports = (message) => {
// //   console.log(`info: ${message}`);
// // };