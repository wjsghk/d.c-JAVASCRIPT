//MDN Number: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//static properties(객체를 만들지 않아도 클래스로만 접근가능한것)

const num1 = 123;
const num2 = new Number(123);
console.log(num1);//123 <= 원시타입이라
console.log(num2);//[Number: 123] <= 객체(object)타입이라


console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.NaN);//NaN
console.log(Number.NEGATIVE_INFINITY);//-Infinity
console.log(Number.POSITIVE_INFINITY);//Infinity

if (num1 < Number.MAX_VALUE) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());//1.02e+2

// 반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());//1234

console.log(num4.toString());//1234.12
console.log(num4.toLocaleString('ar-EG'));//١٬٢٣٤٫١٢ 그지역의 문자열

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));//1234.1
console.log(num4.toPrecision(4));//1234
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법
//1.2e+3

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자
}//2.220446049250313e-16
const num = 0.1 + 0.2 - 0.2; // 0.1
console.log(num);//0.10000000000000003

function isEqual(original, expected) {
  return Math.abs(original - expected) < Number.EPSILON;
}
console.log(isEqual(1, 1));//true
console.log(isEqual(0.1, 0.1));//true
console.log(isEqual(num, 0.1));//true
