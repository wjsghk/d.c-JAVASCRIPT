//배열의 추가 , 삭제
const fruits = ['🍌', '🍎', '🍇', '🍑'];

//배열 아이템을 참조하는 방법
console.log(fruits[0]);//🍌
console.log(fruits[1]);//🍎
console.log(fruits[2]);//🍇
console.log(fruits[3]);//🍑
console.log(fruits.length);//4

//위 코드를 한번에 나타낸능 방식
for(let i =0; i<fruits.length; i++){
    console.log(fruits[i]);
}
// 🍌
// 🍎
// 🍇
// 🍑


//추가,삭제- 좋지않는 방식(인덱스로 지정할때)=>빈칸이 생겨서 안좋다
fruits[6]='딸기';
console.log(fruits);//[ '🍌', '🍎', '🍇', '🍑', <2 empty items>, '딸기' ]

fruits[fruits.length]='good';//공백없이 바로 뒤에 추가 좋은방식
console.log(fruits);//[ '🍌', '🍎', '🍇', '🍑', <2 empty items>, '딸기','good' ]


delete fruits[1];
console.log(fruits);//[ '🍌', <1 empty item>, '🍇', '🍑', <2 empty items>, '딸기' ]

