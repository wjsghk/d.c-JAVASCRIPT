'use strict';//코드 제일 위에다가 작성해준다.
//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// 'use strict'; = 엄격 모드 strict mode
// 리액트와 같은 프레임워트 사용시 기본적으로 엄격 모드임
// var x = 1;
// delete x;

function add(x) {
  var a = 2;
  var b = a + x;
  console.log(this);//undefined 이유는 엄격모드 때문에
}
add(1);

const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}
