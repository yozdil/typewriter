const sentence = "hello there from lighthouse labs";
const y = sentence.length;
let x = 0;
setTimeout(() => {
  for (const char of sentence) {
    process.stdout.write(char);
    x += 50;
  }
  setTimeout(() => {
    console.log("");
  }, 50 * y);
}, x);
