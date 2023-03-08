function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나과 사과를 같이 가지고 오기
getBanana()
  .then((banana)=>
    getApple()//banana가 되면 getapple를 호출한다.
      .then(apple =>{//.then((apple => [banana,apple]))
        return[banana,apple];
      })
  )
  .then(console.log); //[ '🍌', '🍎' ](4초후 1+3초)

  //Promise의 static 함수들
//Promise.all을 병력적으로 한번에 모든 Promise들을 실행
Promise.all([getBanana(),getApple()])
      .then((fruits) => console.log('all', fruits));//all [ '🍌', '🍎' ](3초후)

Promise.race([getBanana(),getApple()])
      .then((fruit) => console.log('race', fruit));//race 🍌(1초후)

      //성공한 결과들 all
Promise.all([getBanana(), getApple(), getOrange()])
      .then((fruits) => console.log('all-error', fruits))
      .catch(console.log);//오류여서 실행안됨

      //모든결과를 출력  allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()])
      .then((fruits) => console.log('all-settle', fruits))
      .catch(console.log);
/**
 * all-settle [
  { status: 'fulfilled', value: '🍌' },
  { status: 'fulfilled', value: '🍎' },
  {
    status: 'rejected',
    reason: Error: no orange
 */

