console.log('hello leetcode');

var a = new Promise((r) => {
  console.log(1);
  r(2);
  r(3);
});

a.then((v) => {
  console.log('1', v); // 1
}).then((v) => {
  console.log('1', v); // 1
});

// var p = Promise.resolve(a);
// console.log(p);
// p.then((v) => {
//   console.log(v); // 1
// }).then((v) => {
//   console.log(v); // 1
// });
