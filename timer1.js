//timer.js
const inputArgs = process.argv.slice(2).filter(time => !isNaN(time) && time >= 0);

inputArgs.forEach((time) => {
  setTimeout(() => {
    // This stdout method makes a beep sound
    process.stdout.write('\x07'); // This stdout method makes a beep sound
  }, time * 1000);
});