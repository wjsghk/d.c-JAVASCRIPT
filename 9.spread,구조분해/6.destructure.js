//구조분해 할당 Destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들수 있다.
const fruits =[ '🍌', '🍓', '🍇', '🍓' ];
const [first, second, ...others] = fruits;
console.log(first);//🍌
console.log(second);//🍓
console.log(others);//[ '🍇', '🍓' ]

const point = [1,2,9];
const [x,y,z=0] = point;
console.log(x);//1
console.log(y);//2
console.log(z);//9 point의 9가 우선순위로 되기때문에 인자값이 없으면 0이 출력

//함수로 구조분헤 나타내는 방법
function makeEmoji(){
    return['apple','굿'];
}
const [title,emoji] = makeEmoji();
console.log(title);//apple
console.log(emoji);//굿


//Object
const lee = { name: '이' , age:20, job:'enginner'};
function display({name, age, job}){
    console.log('이름',name);
    console.log('나이',age);
    console.log('직업',job);
}
display(lee);
// 이름 이
// 나이 20
// 직업 enginner

const  { name , age, job, pet='개'} = lee;
console.log(name);
console.log(age);
console.log(job);
console.log(pet);
// 이
// 20
// enginner
// 개


//Quiz
const prop ={
    name:'Button',
    styles:{//객체 안에 객체
        size:20,
        color:'black',
    },
};

function changeColor({styles:{color}}){
    console.log(color);
}
changeColor(prop);
//black