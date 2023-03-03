//MDN Spread: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
// Spread 연산자(...nums), 전개구문
// 모든 Interable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
// func(...iterable) 함수 인자값입ㄹ때
// [...iterable] 배열일때
// {...obj} 객체일때

function add(a,b,c){
    return a + b + c;
}

const nums = [1,2,3];
console.log(add(nums[0], nums[1], nums[2]));//6
console.log(add(...nums));//6 spread 방식


//Rest parmeters
function sum(first,second,...nums){
    console.log(nums);
}
sum(1,2,0,1,2,5);
//[ 0, 1, 2, 5]  나머지 값

//Array Concat
const array1 = ['🍌', '🍓'];
const array2 = ['🍇', '🍓'];
let arr = array1.concat(array2);
console.log(arr);//[ '🍌', '🍓', '🍇', '🍓' ]
arr = [...array1,'food',...array2];
console.log(arr);//[ '🍌', '🍓', 'food', '🍇', '🍓' ] concat와 다르게 가운데 추가 하기 편하다




//Object
const lee = { name: '이' , age:20};
const updated = {
    ...lee,
    job : 'engineer',
};
console.log(lee);//{ name: '이', age: 20 }
console.log(updated);//{ name: '이', age: 20, job: 'engineer' }

