function curry(fn) {
  // 保存预置参数
  const presetArgs = [].slice.call(arguments, 1)
  // 返回一个新函数
  function curried() {
    // 新函数调用时会继续传参
    const restArgs = [].slice.call(arguments)
    const allArgs = [...presetArgs, ...restArgs]
    return curry.call(null, fn, ...allArgs)
  }
  // 重写toString
  curried.toString = function () {
    return fn.apply(null, presetArgs)
  }
  return curried;
}

function add(a, b) {
  //return a + b;
  return {a, b};
}

const cAdd = curry(add);
const res = cAdd(1, 2);

// const cAdd = curry(add);
// const res = cAdd(2)(3);
console.log(res.toString())

function dynamicAdd() {
  return [...arguments].reduce((prev, curr) => {
    return prev + curr
  }, 0)
}
var add = curry(dynamicAdd);
var a = add(1)(2)(3)(4) // 10
var b = add(1, 2)(3, 4)(5, 6) // 21
console.log(a.toString(), b.toString())
