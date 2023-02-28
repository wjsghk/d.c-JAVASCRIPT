// const apple = {
//     name:'apple',
//     display:function(){
//         console.log(`${this.name}: 빨간사과`);
//     },
// };

// const orange = {
//     name:'orange',
//     display:function(){
//         console.log(`${this.name}: 맛난오렌지`);
//     },
// };

//위에 객체리터럴를 만드는 대신 간략하게 탬플릿으로 만드는 방법
//생성자 함수
//생성자 함수는 대문자로 시작
function Fruit(name,emoji){
    this.name = name;
    this.emoji = emoji;
    this.display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
}

const apple = new Fruit('apple','빨간사과');
const orange = new Fruit('orange','맛난오렌지');


console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);