Function.prototype.myApply = function (thisArg, params) {
  var isStrict = (function () { return this === undefined }())
  if (!isStrict) {
    var thisArgType = typeof thisArg
    if (thisArgType === 'number') {
      thisArg = new Number(thisArg)
    } else if (thisArgType === 'string') {
      thisArg = new String(thisArg)
    } else if (thisArgType === 'boolean') {
      thisArg = new Boolean(thisArg)
    }
  }
  var invokeFunc = this;
  // 处理第二个参数
  var invokeParams = Array.isArray(params) ? params : [];
  return invokeFunc(...invokeParams)
}

const obj = {
  num() {
    console.log(1);
  }
}

const obj2 = {
}

obj.num.myApply(obj2);
obj.num.apply(obj2);