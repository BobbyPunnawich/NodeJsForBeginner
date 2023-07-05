// Async & Await

//Basic Promise
const connect = true; // connected or not ?
const url1 = "bobby.com/1";
const url2 = "bobby.com/2";
const url3 = "bobby.com/3";
const url4 = "bobby.com/4";
const url5 = "bobby.com/5";

function downloading(url) {
  return new Promise(function (resolve, reject) {
    console.log("loading...");
    setTimeout(() => {
      if (connect) {
        resolve(`load ${url} complete`);
      } else {
        reject("fail");
      }
    }, 1000);
  });
}

//เป็นที่นิยมกว่า Promise กับ Callback
async function start() {
  console.log(await downloading(url1));
  console.log(await downloading(url2));
  console.log(await downloading(url3));
}

start();

// api image of product (backend) -> frontend (show in webpage)

// api (primise) -> (pending) -> ีรอข้อมูบมาครบ (await) -> แสดงภาพ

// loading -- > รอข้อมูลมาครบ
