//Blocking (Synchronous)
console.log("start");
console.log("loading");
console.log("end");

//Non-Blocking (Asynchronous)
console.log("start");
//will skip the task that take time too long than others
setTimeout(() => {
  console.log("loading");
}, 3000);
console.log("end");
