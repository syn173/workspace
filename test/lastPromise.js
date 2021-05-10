
/**
* 只有最后一次promise会then与reject
* @param {function} promiseFunction
* promiseFunction 示例： () => fetch('data')
*/
function lastPromise(promiseFunction) {
  let cnt = 0;
  return function () {
    return new Promise((resolve, reject) => {
      //const temp = cnt;
      cnt++;
      return promiseFunction.apply(promiseFunction, arguments).then((data) => {
        --cnt;
        if (0 === cnt) {
          resolve(data)
        }
      })
    })
  }
}

// 示例
let count = 1;
let promiseFunction2 = () =>
  new Promise(rs =>
    setTimeout(() => {
      rs(count++);
    })
  );

let lastFn = lastPromise(promiseFunction2);

lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 无输出
lastFn().then(console.log); // 3
