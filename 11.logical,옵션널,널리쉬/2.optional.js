//옵셔널 체이닝 연산자(?.)
//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
//const price = item && item.price; -> const price = item?.price;


let item = { price: 1 };
const price = item?.price;
console.log(price);
//1

let obj = { name:'개', owner: {name:'lee'}};
function printName(obj){
    const ownerName = obj?.owner?.name;//obj가 있다면 , obj의 owner이 있다면 name의 접근하겠다
    console.log(ownerName);
}
printName(obj);//lee