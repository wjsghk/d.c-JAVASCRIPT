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
  async function fetchFruits(){
     const banana = await getBanana();//promise가 resolve가되면 기다렸다가 getBanana()를 변수에 할당한다.
     const apple = await getApple();
    return [banana,apple];
  }
  fetchFruits()
    .then((fruits) => console.log(fruits));
    //[ '🍌', '🍎' ]