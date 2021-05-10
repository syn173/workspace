// const obj = {
//   a: 1,
//   func() {
//     console.log('func')
//   }
// }

// obj.__proto__.add = function() {}

const obj2 = new Object({
  a: 1,
  b: 2,
  c: 3
})
obj2.prototype.d = 4;
console.log(obj2);
for(let key in obj2) {
  if (obj2.hasOwnProperty(key))
  {
    console.log(key);
  }
}

var x = 10;
function f1() {
  console.log(x)
}

function f2(f) {
  var x = 20;
  f()
}

f2(f1)