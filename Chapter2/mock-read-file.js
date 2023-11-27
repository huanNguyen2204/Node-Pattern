import fs from "fs";
const originalReadFile = fs.readFile;
let mockedResponse = null;
function mockedReadFile(path, cb) {
  setImmediate(() => {
    cb(null, mockedResponse);
  });
}
// (1) // (2)
// (3)
// (4)
// (5)
export function mockEnable(respondWith) {
  mockedResponse = respondWith;
  fs.readFile = mockedReadFile;
}
export function mockDisable() {
  fs.readFile = originalReadFile;
}
