const fruits = ['π', 'π', 'π', 'π'];
for(let i =0; i<fruits.length;i++){
    console.log(fruits[i]);
}
//π
//π
//π
//π

//μ μ½λλμ  κ³ μ°¨ν¨μλ‘ λνλ΄κΈ°
//foreachλ₯Ό λ μμλ³΄λ €λ©΄ ctrlλλ₯΄κ³  foreach ν΄λ¦­
fruits.forEach(function (value){
    console.log(value);
});
//μ μ½λλ₯΄ μ λ‘μ° ν¨μλ‘ λνλ΄κΈ°
fruits.forEach((value) => console.log(value));
// π
// π
// π
// π

//find()λΌλ κ³ μ°¨ν¨μλ‘ λνλ΄κΈ°// μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμλ
// find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
const item1 = { name: 'π₯', price: 2 };
const item2 = { name: 'πͺ', price: 3 };
const item3 = { name: 'π', price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === 'πͺ');
console.log(result);
//{ name: 'πͺ', price: 3 }


// findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
result = products.findIndex((value) => value.name === 'πͺ');
console.log(result);
//1

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ (some)μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.some((item) => item.name === 'πͺ');
console.log(result);
//true


// // λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ(every) μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
 result = products.every((item) => item.name === 'πͺ');
 console.log(result);
//false


 // μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
 result = products.filter((item) => item.name === 'πͺ');
 console.log(result);//const products = [item1, item2, item3, item2];μ΄κ±°λλ¬Έμ 2κ° λμ¨λ€.
 //[ { name: 'πͺ', price: 3 }, { name: 'πͺ', price: 3 } ]

 console.clear();


// Map λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);
//[ 2, 4, 6, 8, 10 ]

//μ§μμΌλλ§ 2λ°°λ₯Ό λνλΌλ
result = nums.map((item) => {
    if(item % 2 ===0){
        return item * 2;
    }else{
        return item;
    }
});
console.log(result);
//[ 1, 4, 3, 8, 5 ]

// flatmap: μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€ flatκ³Ό λΉμ·νκ² νμ΄μ£Όλ μ­ν 
result = nums.map((item) => [1,2]);
console.log(result);
//[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1,2]);
console.log(result);
// [
//   1, 2, 1, 2, 1,
//     2, 1, 2, 1, 2
//   ]

result = ['dream','coding'].map((text) => text.split(''));
console.log(result);
//[ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]

result = ['dream','coding'].flatMap((text) => text.split(''));
console.log(result);
// [
//     'd', 'r', 'e', 'a',
//     'm', 'c', 'o', 'd',
//     'i', 'n', 'g'
//   ]

//sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬
//λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts);
//[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers);
//[ 0, 1, 10, 2, 4, 5 ] 10λ¨Όμ  λμ¨μ΄μ λ λ¬Έμμ΄ ννμ μ€λ¦μ°¨μμΌλ‘ λΌμ '1'0

//< 0 aκ° μμΌλ‘ μ λ ¬, μ€λ¦μ°¨μ
//> 0 bκ° μμΌλ‘ μ λ ¬, λ΄λ¦Όμ°¨μ
numbers.sort((a, b) => a - b);
console.log(numbers);
//[ 0, 1, 2, 4, 5, 10 ]

//reduce  λ°°μ΄μ μμλ€μ μ μ΄μ μ μ΄μ κ°μ νλλ‘ ν!!
result = [1,2,3,4,5].reduce((sum,value) => {
    sum += value;
    return sum;
},0);

//μ λ‘μ°ν¨μλ‘ λνλ΄κΈ° 
//result = [1,2,3,4,5].reduce((sum,value) => (sum += value),0);
console.log(result);
//15

