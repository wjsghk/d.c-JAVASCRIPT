function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 🥚`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 🍳`);
}

function getChicken() {
  return Promise.reject(new Error('치킨을 가지고 올 수 없음!'));
  //return Promise.resolve(`풀 => 🐓`);
}

getChicken()
  .catch((error)=>{
    console.log(error.name);//Error로 출력된다.
    return'🐓';
  })
  .then((chicken)=>{
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))//🍳
  .then((friedEgg) => console.log(friedEgg));
  
//간략버전
// .catch(() =>'🐓')
// .then(fetchEgg)  전달하느 인자와 호출하는 인자가 동일해서 지워도된다.
// .then(fryEgg)
// .then(console.log);
  
  
  // Error
  // 🐓 => 🥚 => 🍳