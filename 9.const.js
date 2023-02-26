//let 재할당이 가능
let a =1;
a=2;

//const 재할당이 불가능
//1.상수2.상수변수 or 변수 여서
const text ='hello';
//text ='hi';

//터미널 값에서 에러가 뜬다.
// text ='hi';
//      ^
// TypeError: Assignment to constant variable.

const apple = {
    name : 'apple',
    color : 'red'
};
console.log(apple);
apple.name='orange';
//apple 이란거는 주소값을 저장하는 메모리셀이고
//name,color은 heap의 객체 여서 변경이가능
console.log(apple);
