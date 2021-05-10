function curry1(func) {
  var _args = [].slice.call(arguments, 1);
  var _add = function() {
    console.log('arguments inner', arguments, _add.toString());
    _args.push(...arguments);
    return _add;
  }
  console.log('arguments out', arguments);
  _add.toString = function() {
    console.log('_args', _args);
    return _args.reduce(func);
  }
  console.log('_add', _add);
  return _add;
}

function add(a, b) {
  return a + b;
}

function add0() {
  var _args = [].slice.call(arguments);
  var _add = function() {
    console.log('arguments inner', arguments, _add.toString());
    _args.push(...arguments);
    return _add;
  }
  console.log('arguments out', arguments);
  _add.toString = function() {
    console.log('_args', _args);
    return _args.reduce((a, b) => a + b);
  }
  console.log('_add', _add);
  return _add;
}