{
  //function foo() { console.log(1) };
  var foo = 1;
  console.log(foo);
  function foo() { console.log(2) };
  foo = 2;
  console.log(foo)
  // function foo() { console.log(2) };
}
console.log(foo.toString())