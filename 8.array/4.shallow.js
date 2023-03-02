const pizza = { name : '피자', price: 2 };
const ramen = { name : '라면', price: 3 };
const sushi = { name : '초밥', price: 1 };
const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1', store1);//store1 [ { name: '피자', price: 2 }, { name: '라면', price: 3 } ]
console.log('store2', store2);//store2 [ { name: '피자', price: 2 }, { name: '라면', price: 3 } ]

store2.push(sushi);
console.log('store1', store1);//store1 [ { name: '피자', price: 2 }, { name: '라면', price: 3 } ]

console.log('store2', store2);
// store2 [
//     { name: '피자', price: 2 },
//     { name: '라면', price: 3 },
//     { name: '초밥', price: 1 }
//   ]

//얕은복사 shallow copy - 객체는 메모리 주소 전달한다.
//자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!!
//shallow copy의 예
pizza.price = 4;
console.log('store1', store1);//store1 [ { name: '피자', price: 4 }, { name: '라면', price: 3 } ]
console.log('store2', store2);
// store2 [
//     { name: '피자', price: 4 },
//     { name: '라면', price: 3 },
//     { name: '초밥', price: 1 }
//   ]