//Nullish는 null과 undefined 경우에만 쓸 수 있다.
//??는 null과 undefined 경우에만 쓸 수 있다.
//|| falsy한 경우 설정(할당) 0, -0, '',null,undefined 

let num = 0;
console.log(num || '-1');//-1  ||연산
console.log(num ?? '-1');//0

let num1;
console.log(num1 ?? '-1');//-1
