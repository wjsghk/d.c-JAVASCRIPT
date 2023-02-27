//동등 비교 관계 연산자(== , != , ===(갑과 타입이 둘다 같음) , !==)

console.log(2 == 2); //true
console.log(2 != 2); //false
console.log(2 != 3); //true
console.log(2 == 3);//false
console.log(2 == '2');//true
console.log(2 === '2');//false
console.log(true == 1);//true boolen으로 바꾸면 1이기 때문에
console.log(true === 1);//false
console.log(false == 0);//true
console.log(false === 0);//false

console.clear();
const obj1 = {//ex 0x111
     name: 'js',
}
const obj2 = {//ex 0x112
    name: 'js',
}

console.log(obj1 == obj2);//false 주소값이 다르기 때문에
console.log(obj1 === obj2);//false 주소값이 다르기 때문에

console.log(obj1.name == obj2.name);//true
console.log(obj1.name === obj2.name);//true

let obj3 = obj2;// 참조값 => 동일한 주소여서
console.log(obj3 == obj2);//true
console.log(obj3 === obj2);//true