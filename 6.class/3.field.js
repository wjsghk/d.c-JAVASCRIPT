//접근제어자를 이용해서 캡슐화(내부에 있던 사항들을 외부로 인해 변경 안되게하기)
//ex) private(#),public(기본),protected
class Fruit{
    #name;//class Fruit의 프로퍼티(변수)
    #emoji;
    #type = '과일';
    constructor(name,emoji){//생성자(constructor):new 키워드로 객체를 생성할 때 호출되는 함수
        this.#name = name;//class는 데이터가 들어간게 아니라 템플릿으로 틀을 만든상태여서 자체만으로 호출이 불가능하다.
        this.#emoji = emoji;
    }
    //인스턴스 레벨의 메서드
    #display = () => {
        console.log(`${this.#name}:${this.#emoji}`);
    };
}


//apple은 Fruit 클래스의 인스턴스이다.
const apple = new Fruit('apple','빨간사과');
//apple.name = '오렌지'; //#을 붙이면 밑에 사진 
console.log(apple);//#(private)때문에 Fruit {}만 남게된다. #(private)을 하나씩 지우면  출력이된다.