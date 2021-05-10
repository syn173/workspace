const isObject = function (v) {
  return Object.prototype.toString.call(v) === '[object Object]';
};


const isDate = function (v) {
  return (v instanceof Date);
};
const deepCopy = function (v) {
  console.log('deepCopy', v, isDate(v), Object.prototype.toString.call(v));
  if (v === null || typeof v !== 'object') return v;

  if (isDate(v)) {
    return new Date(v);
  }
  let r;

  if (v instanceof Array) {
    r = [];
    for (let i = 0; i < v.length; i++) r.push(deepCopy(v[i]));
  } else {
    r = {};
    for (let k in v) if (v.hasOwnProperty(k)) r[k] = deepCopy(v[k]);
  }

  return r;
};
let a = {
  date: [new Date()]
};
console.log(isDate(new Date()))
console.log(isDate(a.date[0]))
console.log(deepCopy())