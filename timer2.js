//timer2.js
process.stdin.setRawMode(true);
process.stdin.setEncoding('utf8');

process.stdin.on('data', key => {
  if (key === 'b') {
    process.stdout.write('\x07');
  }
  const numericKey = parseInt(key);
  if (!isNaN(numericKey) && numericKey >= 1 && numericKey <= 9) {
    process.stdout.write(`Setting timer for ${numericKey} seconds...\n`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, numericKey * 1000);
  }
  if (key === '\u0003') {
    process.stdout.write("Thanks for using me, ciao!\n");
    process.exit();
  }
});