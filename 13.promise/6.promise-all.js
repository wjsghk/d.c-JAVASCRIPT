function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('๐');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// ๋ฐ๋๋๊ณผ ์ฌ๊ณผ๋ฅผ ๊ฐ์ด ๊ฐ์ง๊ณ  ์ค๊ธฐ
getBanana()
  .then((banana)=>
    getApple()//banana๊ฐ ๋๋ฉด getapple๋ฅผ ํธ์ถํ๋ค.
      .then(apple =>{//.then((apple => [banana,apple]))
        return[banana,apple];
      })
  )
  .then(console.log); //[ '๐', '๐' ](4์ดํ 1+3์ด)

  //Promise์ static ํจ์๋ค
//Promise.all์ ๋ณ๋ ฅ์ ์ผ๋ก ํ๋ฒ์ ๋ชจ๋  Promise๋ค์ ์คํ
Promise.all([getBanana(),getApple()])
      .then((fruits) => console.log('all', fruits));//all [ '๐', '๐' ](3์ดํ)

Promise.race([getBanana(),getApple()])
      .then((fruit) => console.log('race', fruit));//race ๐(1์ดํ)

      //์ฑ๊ณตํ ๊ฒฐ๊ณผ๋ค all
Promise.all([getBanana(), getApple(), getOrange()])
      .then((fruits) => console.log('all-error', fruits))
      .catch(console.log);//์ค๋ฅ์ฌ์ ์คํ์๋จ

      //๋ชจ๋ ๊ฒฐ๊ณผ๋ฅผ ์ถ๋ ฅ  allSettled
Promise.allSettled([getBanana(), getApple(), getOrange()])
      .then((fruits) => console.log('all-settle', fruits))
      .catch(console.log);
/**
 * all-settle [
  { status: 'fulfilled', value: '๐' },
  { status: 'fulfilled', value: '๐' },
  {
    status: 'rejected',
    reason: Error: no orange
 */

