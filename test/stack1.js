function output(str) {
  const stack = [];
  let head = 0;

  for(let i = 0, len = str.length; i < len; ++i) {
    if (str[i] === ']') {
      let t = '';

      while(stack[head - 1] !== '[' && head >= 0) {
        t = stack[--head] + t;
      }

      if (stack[head - 1] === '[') {
        --head;
      }

      if (stack[head - 1] >= 0 && stack[head - 1] <= 9) {
        t = duplicate(t, +stack[head - 1]);
        --head;
      }
      stack[head++] = t;
    } else {
      stack[head++] = str[i]
    }
  }
  let res = '';
  for(let i = 0; i < head; ++i) {
    res += stack[i]
  }
  return res;
}

function duplicate(str, n) {
  let res = '';
  while(n--) {
    res += str;
  }
  return res;
}

console.log(output('3[a]2[bc]'))
console.log(output('3[a2[c]]'))
// 3[a]2[bc]  = aaabcbc;
// 3[a2[c]] === > accaccacc;