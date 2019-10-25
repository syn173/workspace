function isInt(n) {
  return n > 0 && parseInt(n) == n;
}
function getPath(m, n) {
  const a = (m + n) / 2.0, b = (m - n) / 2;
  if (!isInt(a) || !isInt(b)) {
    return false;
  }
  return [a, b];
}

function main(m, n) {
  const res = [m];
  let count = 0;
  while(res.length) {
    const now = res.pop();
    const next = getPath(now, n);
    if (next === false) {
      ++count;
    } else {
      res.push(...next);
    }
  }
  console.log(count);
}

main(120, 8);
main(202, 2);