// import { randomBytes } from "crypto";

function delay(miliseconds) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(new Date())
    }, miliseconds)
  });
}

async function playingWithDelay() {
  console.log("Delaying...", new Date());

  const dateAfterOnSecond = await delay(1000);
  console.log(dateAfterOnSecond);

  const dateAfterThreeSecond = await delay(3000);
  console.log(dateAfterThreeSecond);

  return "done";
}

playingWithDelay()
  .then(result => {
    console.log(`After 4 seconds: ${result}`)
  })



// function promisify(callbackBasedApi) {
//   return function promisify(...args) {
//     return new Promise((resolve, reject) => {
//       const newArgs = [
//         ...args,
//         function(err, result) {
//           if (err) {
//             return reject(err)
//           }

//           resolve(result)
//         }
//       ]
//       callbackBasedApi(...newArgs)
//     })
//   }
// }

// const randomBytesP = promisify(randomBytes)
// randomBytes(32)
//   .then(buffer => {
//     console.log(`Radom bytes: ${buffer.toString()}`)
//   })

// console.log(`Delay...${new Date().getSeconds()}s`);
// delay(3000)
//   .then(newDate => {
//     console.log(`Done ${newDate.getSeconds()}s`)
//   })

