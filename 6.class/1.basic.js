//MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
// 객체를 손쉽게 만들수 있는 템플릿
// 1.생성자함수(고전적인 방법)
// 2.클래스(최신방법)

//클래스함수
class Fruit{
    constructor(name,emoji){//생성자(constructor):new 키워드로 객체를 생성할 때 호출되는 함수
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
}
//apple,orange은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','빨간사과');
const orange = new Fruit('orange','맛난오렌지');
//obj는 객체이고, 그 어떤 클래스의 인스턴스도 아니다.
//객체는 만들어진 객체이고 어떤클래싀 만들어진것을 인스턴스이다ㅣ.
const obj = {name:'ellie'};

console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();