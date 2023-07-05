//ทำงานแบบ Asynchronous --> แก้ปัญหา Callback Hell ได้

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
    }, 3000);
  });
}

// downloading(url1).then(function (result) {
//   console.log(result);
//   downloading(url2).then(function (result) {
//     console.log(result);
//     downloading(url3).then(function (result) {
//       console.log(result);
//     });
//   });
// });

downloading(url1).then(function (result) {
  console.log(result);
});
downloading(url2).then(function (result) {
  console.log(result);
});
downloading(url3).then(function (result) {
  console.log(result);
});
// downloading(url1)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("end");
//   });
