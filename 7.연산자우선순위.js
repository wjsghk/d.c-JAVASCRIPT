//연산자 우선순위
let a = 2;
let b = 3;
let result = a + b * 4;//14
console.log(result);
result = a++ + b * 4;//14 이유는 곱셈먼저하고 + 하고 증감연산자는 다음에 출력될때 증가
console.log(result);

//MDN 연산자 우선순위: 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
