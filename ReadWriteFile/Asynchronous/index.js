//Non-Blocking --> (Use for read/write Big Data) --> add Callback Function
const fs = require("fs");

//read input.txt
fs.readFile("MyFile/input.txt", "utf-8", (err, data) => {
  if (err) return console.log("error", err);
  const outputText = `Hello Node.js\n${data}\nwhen${new Date()}`;
  fs.writeFile("MyFile/output.txt", outputText, (err) => {
    if (err) return console.log("error", err);
    console.log("complete writing file");
  });
});
console.log("end");
