const sentence = "hello there from lighthouse labs";
const newLineTime = sentence.length;

let time = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50;
}

setTimeout(() => {
  console.log("");
}, 50 * newLineTime);
