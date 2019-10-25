function di(arr) {
  arr.push(121);
  const len = arr.length;
  //console.log('arr', arr, len);
  let max = arr[0] - 1;
  for (let i = 0; i < len - 1; ++i) {
    max = Math.max(max, arr[i + 1] - arr[i] - 1);
  }
  return max;
}

function deal(n, m, arr) {
  if (n > m) {
    return 120;
  }

  let max = 0;
  for (let i = 0; i < m - n + 1; ++i) {
    const tmpArr = Array.from(arr);
    tmpArr.splice(i, n);
    max = Math.max(max, di(tmpArr));
  }
  return max;
}

//console.log(deal(2, 5, [10, 30, 55, 56, 90]))
console.log(deal(1, 5, [34, 77, 82, 83, 84]));
console.log(deal(2, 6, [23, 57, 82, 90, 113, 115]));