// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함
//이유는 함수의 선언을 제일 위로 올려주기 때문에 (=호이스팅)
print();

function print() {
  console.log('Hello');
}
//Hello

// 변수(let, const)와 클래스는 선언만!! 호이스팅이 되고,
// 초기화는 안됨
// 초기화 전, 변수에 접근하면 컴파일(빌드) 에러가 발생!!
// console.log(hi); 에러가 발생!!
//let hi =>선언
let hi = 'hi';//초기화
let func1 = function () {};

// const cat = new Cat(); 에러가 발생!!
class Cat {//클래스

}


let x = 1;
{
  console.log(x);//let x = 2;를 주석하면 값은 1이 
  let x = 2;  //출력 주석해제하면 에러발생!! => ReferenceError: Cannot access 'x' before initialization  
}
