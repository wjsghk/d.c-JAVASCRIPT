//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// 클로저를 쓰는 이유 내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해
// 즉) 캡슐화와 정보은닉
// 클래스 private 필드 또는 메소드를 사용하는 효과와 동일!
function makeCounter() {
  let count = 0;
  function increase() {
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase();//1
increase();//2
increase();//3

//클래스로 나타내는 방법
class Counter {
  #count = 0; //# = private필드
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();//1
counter.increase();//2
