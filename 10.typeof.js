//typeof: 데이터 타입을 확인
//값을 타입 문자열로 반환
//자바스크립에서도 타입이 있다라는걸 보여주고 동적(dynamic)이다vs 자바는 정적
let variable;
console.log(typeof variable);

variable='';
console.log(typeof variable);

variable=123;
console.log(typeof variable);

variable={};
console.log(typeof variable);

variable=function(){};
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');
