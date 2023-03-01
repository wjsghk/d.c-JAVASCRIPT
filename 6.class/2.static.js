//static 정적 프로퍼티,메서드
class Fruit{
    static MAX_FRUITS = 4;//속성 앞에 메서드를 붙일수있다,인스턴스레벨에서는 접근할수없다. 최대과일수를 제한
    constructor(name,emoji){//생성자(constructor):new 키워드로 객체를 생성할 때 호출되는 함수
        this.name = name;//class는 데이터가 들어간게 아니라 템플릿으로 틀을 만든상태여서 자체만으로 호출이 불가능하다.
        this.emoji = emoji;
    }
    //클래스 레벨의 메서드
    static makeRandomFruit(){
        //클래스 레벨의 메서드에서는 템플릿이기 때문에 데이터가 저장이 안되있는 상채 this를 참조할수없다.
        return new Fruit('banana','긴 바나나');
    }
    //인스턴스 레벨의 메서드
    display = () => {
        console.log(`${this.name}:${this.emoji}`);
    };
}

const banana = Fruit.makeRandomFruit();
console.log(banana);
//Fruit { display: [Function: display], name: 'banana', emoji: '긴 바나나' }
console.log(Fruit.MAX_FRUITS);//4

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