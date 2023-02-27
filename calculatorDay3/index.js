const yargs = require('yargs');

// Define the command-line arguments
const argv = yargs
  .usage('Usage: $0 <command> [options]')
  .command('add <num1> <num2>', 'Add two numbers', {}, (argv) => {
    const result = Number(argv.num1) + Number(argv.num2);
    console.log(`Result: ${result}`);
  })
  .command('subtract <num1> <num2>', 'Subtract two numbers', {}, (argv) => {
    const result = Number(argv.num1) - Number(argv.num2);
    console.log(`Result: ${result}`);
  })
  .command('multiply <num1> <num2>', 'Multiply two numbers', {}, (argv) => {
    const result = Number(argv.num1) * Number(argv.num2);
    console.log(`Result: ${result}`);
  })
  .command('divide <num1> <num2>', 'Divide two numbers', {}, (argv) => {
    const result = Number(argv.num1) / Number(argv.num2);
    console.log(`Result: ${result}`);
  })
  .help()
  .argv;
