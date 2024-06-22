/* I had used this code to complete my task as the link given in refernces was not opening.
Below is the normal call back function */

// const fs = require('fs');

// function readFileAsync(filePath, callback) {
//   fs.readFile(filePath, 'utf8', (err, data) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null, data);
//     }
//   });
// }

// function processFileData(data, callback) {
//   // simulate some async operation
//   setTimeout(() => {
//     const processedData = data.toUpperCase();
//     callback(null, processedData);
//   }, 2000);
// }

// function writeToFileAsync(filePath, data, callback) {
//   fs.writeFile(filePath, data, (err) => {
//     if (err) {
//       callback(err);
//     } else {
//       callback(null,data);
//     }
//   });
// }

// readFileAsync('data.txt', (err, data) => {
//   if (err) {
//     console.error(err);
//   } else {
//     processFileData(data, (err, processedData) => {
//       if (err) {
//         console.error(err);
//       } else {
//         writeToFileAsync('output.txt', processedData, (err) => {
//           if (err) {
//             console.error(err);
//           } else {
//             console.log('File written successfully!');
//           }
//         });
//       }
//     });
//   }
// });

const fs = require('fs').promises;   //refactored the code to use promises and async/await

async function readFileAsync(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return data;
  } catch (err) {
    throw err;
  }
}

async function processFileData(data) {
  // simulate some async operation
  await new Promise(resolve => setTimeout(resolve, 2000));
  return data.toUpperCase();
}

async function writeToFileAsync(filePath, data) {
  try {
    await fs.writeFile(filePath, data);
  } catch (err) {
    throw err;
  }
}

async function main() {
  try {
    const data = await readFileAsync('data.txt');
    const processedData = await processFileData(data);
    await writeToFileAsync('output.txt', processedData);
    console.log('File written successfully!');
  } catch (err) {
    console.error(err);
  }
}

main();