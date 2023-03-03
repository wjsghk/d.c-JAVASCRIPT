//MDN Interation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
//이터레이션 -프로토콜 (반복,순회 -약속규격,인터페이스)
// [Symbol.iterator](); iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 iterator를 리턴한다는것은
// 순회 가능한 객체이다 라는걸 알 수 있음
//순회가 가능하면 무엇을 할 수 있나? for..of, spread를 사용할수있다.

const array = [1,2,3];
for (const item of array){//array의 item들
    console.log(item);
}
//1
//2
//3  배열은 순회가 가능하기 떄문에 이렇게 순차적으로 출력된다.

//Array 에 ctrl 누르고 클릭하면  위 사진 처럼 이터러블을 사용 할 수있다는걸 보여줌.

const obj = {0:1, 1:2};
for (const item in obj){//key를 출력 ,객체는 심볼정의가 없어서 for of 대신 for in를 쓴다ㅏ.
    console.log(item);
}
// 0
// 1


const iterator = array.values();
    console.log(iterator.next());//{ value: 1, done: false }, next는 결과 done를 나타낸다.
    console.log(iterator.next().value);//2
    console.log(iterator.next().value);//3
    console.log(iterator.next().done);//done

//위 코드를 while 반복문으로 나타내기
const iterator1 = array.values();
while(true){
    const item = iterator1.next();
    if(item.done) break;
    console.log(item.value);
}
// 1
// 2
// 3