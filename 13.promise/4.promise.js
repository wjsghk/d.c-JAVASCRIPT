//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//promise는 콜백함수를 전달 받지 않는다.,new를 사용해서 생성한다.
//Promise는 객체이고  비동기 작업이 맞이할 미래의 완료 또는 실패와 그 결과 값을 나타냅니다.

function runInDelay(seconds) {
   return new Promise((resolve,reject)=>{//성공할때는 resolve가 then, 에러날때는 reject가 catch 출력된다.
    if(!seconds || seconds < 0){
        reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(()=>{
        resolve();
    },seconds * 1000);
   });
}
//간략한 버전
// function runInDelay(seconds) {
//     return new Promise((resolve,reject)=>{
// if(!seconds || seconds < 0){
//     reject(new Error('seconds가 0보다 작음'));
// }
//    setTimeout(resolve,seconds * 1000);
//     });
//  }



// runInDelay(2)
// .then(필요한일을 수행) or .catch(에러를처리)
// .finally(최종적으로 무조건 호출!!)
runInDelay(2)
.then(() => {//실행문
    console.log('타이머 완료!');
  }) 
.catch(error =>console.error(error))
.finally(()=>console.log('최종적으로 무조건 호출!!'));

//간략한버전
// runInDelay(2)
// .then(() => console.log('타이머 완료!')) 
// .catch(console.error)
// .finally(()=>console.log('최종적으로 무조건 호출!!'));

//에러가 없을시 결과값
// 타이머 완료!
// 최종적으로 무조건 호출!!


//에러가 있을시 결과값 2를 2보다 작게 설정할때
// Error: seconds가 0보다 작음
// 최종적으로 무조건 호출!!
