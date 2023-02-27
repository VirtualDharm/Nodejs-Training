const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
rl.question('Enter a file name: ', (filename) => {
    rl.question('Enter some text: ', (text) => {
      fs.writeFile(filename, text, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log(`Text saved to ${filename}`);
        }
  
        rl.close();
     });
   });
});