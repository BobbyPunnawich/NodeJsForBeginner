//Blocking (Synchronous)
const fs = require("fs");

// read input.txt
const data = fs.readFileSync("MyFile/input.txt", "utf-8");
console.log(data);
console.log("end");

// write
const outputText = `Hello Node.js\n ${data}\n Read at ${new Date()}`;
fs.writeFileSync("MyFile/output.txt", outputText);
console.log("already write file!");
