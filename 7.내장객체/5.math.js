//MDN Math: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// Math
// static properties, method
//static properties(객체를 만들지 않아도 클래스로만 접근가능한것)

console.log(Math.E); // 2.718281828459045 오일러의 상수, 자연로그의 밑
console.log(Math.PI); //3.141592653589793  원주율 PI값

// static method
// 절대값
console.log(Math.abs(-10)); 
// 10 소수점 이하를 올림
console.log(Math.ceil(1.4));
// 2 소수점 이하를 내림
console.log(Math.floor(1.4));
//1  소수점 이하를 반올림

console.log(Math.round(1.4));
console.log(Math.round(1.7));
// 1 , 2 정수만 반환

console.log(Math.trunc(1.5432));
//1 

// 최대, 최소값을 찾기
console.log(Math.max(1, 3, 4));//4
console.log(Math.min(1, 3, 4));//1

// 거듭제곱
console.log(3 ** 2);//9
console.log(Math.pow(3, 2));//9

// 제곱근 <-> 거듭제곱
console.log(Math.sqrt(9));//3

// 랜덤한 값을 반환  제일중요!!!
console.log(Math.random());//랜덤숫자 실행 0~0.9

// 1~10 랜덤실행
console.log(Math.floor(Math.random() * 10 + 1));
