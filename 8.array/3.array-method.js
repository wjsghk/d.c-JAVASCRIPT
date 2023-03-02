//배열의함수들
//포인트 배열자체를 변경하는지,새로운 배열을 반환하는지
const fruits = ['🍌', '🍎', '🍇'];

//특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));//static 함수(method)를 사용
//true

console.log(Array.isArray({}));
//false


//특정한 아이템의 위치르 찾을때
console.log(fruits.indexOf('🍎'));
//1

//특정한 아이템이 있는지를 체크
console.log(fruits.includes('🍎'));
//true

//추가-제일 뒤에 
let length = fruits.push('마지막');//배열 자체를 수정(=업데이트)
console.log(fruits);//[ '🍌', '🍎', '🍇', '마지막' ]
console.log(length);//4

//추가-제일 앞에 
length = fruits.unshift('처음');
console.log(fruits);//[ '처음', '🍌', '🍎', '🍇', '마지막' ]
console.log(length);//5

//제거-제일 뒤
let lastItem = fruits.pop();
console.log(fruits);//[ '처음', '🍌', '🍎', '🍇' ]
console.log(lastItem);//마지막

//제거- 제일 앞
lastItem = fruits.shift();
console.log(fruits);//[ '🍌', '🍎', '🍇' ]
console.log(lastItem);//처음

//중간부터 삭제
fruits.splice(1,1);//1부터시작해서 1개 삭제
console.log(fruits);//[ '🍌', '🍇' ] 사과삭제

//중간부터 추가
fruits.splice(1,0,'1','2');//1부터시작해서 0개삭제하고 뒤에 추가
console.log(fruits);//[ '🍌', '1', '2', '🍇' ]

//잘라진 새로운!!! 배열을 만듬 => slice
let newArr = fruits.slice(0,2)//0부터 1까지 자름
//slice(1) 1부터 끝까지 , slice(-1)뒤에서부터 앞쪽 까지
console.log(newArr);//[ '🍌', '1' ]
console.log(fruits);//[ '🍌', '1', '2', '🍇' ]
newArr = fruits.slice(-1);
console.log(newArr);//🍇

//여러개의 배열을 붙여줌
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = arr1.concat(arr2);
console.log(arr1);//[ 1, 2, 3 ]
console.log(arr2);//[ 4, 5, 6 ]
console.log(arr3);//[ 1, 2, 3, 4, 5, 6 ]

//순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);//[ 6, 5, 4, 3, 2, 1 ]
console.clear();

//중첩된 배열을 하나의 배열로 쫙 펴기
let arr = [
    [1,2,3],
    [4,[5,6]],
];
console.log(arr);//[ [ 1, 2, 3 ], [ 4, [ 5, 6 ] ] ]
console.log(arr.flat());//[ 1, 2, 3, 4, [ 5, 6 ] ] 1단계만 풀어준다
console.log(arr.flat(2));//[ 1, 2, 3, 4, 5, 6 ] 숫자를 넣으면 그만큼 풀어준다.



arr = arr.flat(2);
//특정한 값으로 배열을 채우기
arr.fill(0);//배열 자체를 수정
console.log(arr);//[ 0, 0, 0, 0, 0, 0 ]

arr.fill('s',1,3);//1부터 2까지만 s로 채운다.
console.log(arr);//[ 0, 's', 's', 0, 0, 0 ]

arr.fill('a',1);//1부터 끝까지 a로 채운다.
console.log(arr);//[ 0, 'a', 'a', 'a', 'a', 'a' ]

//베열을 문자열로 합하기
let text = arr.join();
console.log(text);//0,a,a,a,a,a

text = arr.join('|');
console.log(text);//0|a|a|a|a|a
