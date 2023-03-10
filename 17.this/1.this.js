'use strict';
/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저에서 사용 가능함: window
 *  - 노드에서 사용 가능함: 모듈
 */
const x = 0;
module.exports.x = x;
console.log(this);//{ x : 0}  노드에서 this란 module를 가리킨다.

console.log(globalThis); //globalThis는 객체를 가리킨다 밑에 출력값들
// globalThis.setTimeout() 
// setTimeout() 위 코드를 다른방식으로 나타냄
{/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Function: structuredClone],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 94.86779999732971,
      nodeStart: 5.990200042724609,
      v8Start: 14.14299988746643,
      bootstrapComplete: 71.42289996147156,
      environment: 30.266499996185303,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1678426718365.691
  },
  fetch: [AsyncFunction: fetch]
} */}
console.clear();

/**
 * 함수 내부에서의 this
 * 엄격모드에서는 undefined
 * 느슨한 모드에서는 globalThis
 */
function fun() {
  console.log(this);
}
fun();//엄격모드일경우 위에 globalThis와 같이 출력된다.
      //엄격모드 아닐 경우 위에 undefined

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹'); 
const cat2 = new Cat('미야옹');
cat1.printName();//냐옹
cat2.printName();//미야옹
