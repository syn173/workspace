function F1() {
  this.a = 'a';
  // return {
  //   a: 'b'
  // }
  return 'ssr';
}

const f1 = new F1();
// f1.a = 'c'
console.log(f1.a);