// คำนวณ --> แสดงผล (ทบทวน Callback Function)

// // Normal
// function calculate(x, y) {
//   setTimeout(() => {
//     console.log("loading...");
//     return x + y;
//   }, 3000);
// }

// function display(result) {
//   console.log(`result = ${result}`);
// }

// // basic function
// const sum = calculate(100, 50);
// display(sum);

// Using Callback
function calculate(x, y, callback) {
  console.log("loading...");
  setTimeout(() => {
    const sum = x + y;
    callback(sum);
  }, 3000);
}

function display(result) {
  console.log(`result = ${result}`);
}

// Callback function
calculate(100, 50, display);

// เขียนโปรแกรมดาวน์โหลดไฟล์
const url1 = "kong.dev/file1.json/1";
const url2 = "kong.dev/file1.json/2";
const url3 = "kong.dev/file1.json/3";

function downloading(url, callback) {
  setTimeout(() => {
    console.log(`loading ${url}`);
    callback();
  }, 3000);
}

function complete() {
  console.log("complete");
}

downloading(url1, complete);
