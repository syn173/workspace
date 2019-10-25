var arr = [['a','b', 'c'], ['1', '2'], ['@', '!', '~']];

function cha(arr) {
  var n = arr.length;
  var result = '';

  function deal(k) {
    if (k === n) {
      console.log(result);
      return;
    }

    for (var i = 0; i < arr[k].length; ++i) {
      var tmp = result;
      result = result ? result + '-' + arr[k][i] : arr[k][i];
      deal(k + 1)
      result = tmp;
    }
  }
  deal(0);
}

cha(arr)
