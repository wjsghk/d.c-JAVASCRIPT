//함수
//MDN 함수: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function
//사용예제1
function add(num1,num2){
    console.log('function');
    return num1 + num2;
}
const result = add(1,2);
console.log(result);//function , 3

//사용예제2
// let lastName = '김';
// let firstName = '지수';
// let fullName = `${lastName} ${firstName}`;
// console.log(fullName);// 김 지수

// let lastName2 = '박';
// let firstName2 = '철수';
// let fullName2 = `${lastName2} ${firstName2}`;
// console.log(fullName2);// 김 지수

//▲위 코드를 함수로 나타내기
//함수를 쓰는이유 유지보수가 쉬어진다.틀을 만든다고 생각
function fullName(firstName,lastName){
    return `${firstName} ${lastName}`;
}

let lastName = '김';
let firstName = '지수';
console.log(fullName(firstName,lastName));//지수 김

let lastName2 = '박';
let firstName2 = '철수';
console.log(fullName(firstName2,lastName2));// 철수 박

