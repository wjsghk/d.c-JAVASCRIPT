function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => π₯`);
}

function fryEgg(egg) {
  return Promise.resolve(`${egg} => π³`);
}

function getChicken() {
  return Promise.reject(new Error('μΉν¨μ κ°μ§κ³  μ¬ μ μμ!'));
  //return Promise.resolve(`ν => π`);
}

getChicken()
  .catch((error)=>{
    console.log(error.name);//Errorλ‘ μΆλ ₯λλ€.
    return'π';
  })
  .then((chicken)=>{
    return fetchEgg(chicken);
  })
  .then((egg) => fryEgg(egg))//π³
  .then((friedEgg) => console.log(friedEgg));
  
//κ°λ΅λ²μ 
// .catch(() =>'π')
// .then(fetchEgg)  μ λ¬νλ μΈμμ νΈμΆνλ μΈμκ° λμΌν΄μ μ§μλλλ€.
// .then(fryEgg)
// .then(console.log);
  
  
  // Error
  // π => π₯ => π³