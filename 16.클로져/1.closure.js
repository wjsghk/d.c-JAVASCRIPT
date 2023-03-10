const text = 'hello';
function func() {
  console.log(text);
}
func();//hello

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1();//inside inner: 0
 