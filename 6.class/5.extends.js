//MDN class: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/class
// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
// }

// class Dog{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log('먹자!');
//     }
//     sleep(){
//         console.log('잔다!');
//     }
//     play(){
//         console.log('논다!');
//     }
// }

//위에 clsss들을 하나씩 치기보다는 상속을 이용해서 만들어보기
class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log('먹자!');
  }
  sleep() {
    console.log('잔다!');
  }
}

class Tiger extends Animal {}
const tiger = new Tiger('노랑이');
console.log(tiger); //Tiger { color: '노랑이' }
tiger.sleep();
tiger.eat();


class Dog extends Animal {
    constructor(color,owner){//생성자를 다시 만들려면 위 조상들꺼를 가져와야한다.
        super(color);//super는 부모 상속자를 가리키고 그 색깔을 가져오겠ㄷ.
        this.owner = owner;
    }
  play() {
    console.log('논다!');
  }
  eat() {//전의 함수를 덮어씌우려면 오버라이디을 한다. 
    console.log('안먹어!');
    super.eat();//부모것도 가져오고 싶을때
  }
}
const dog = new Dog('빨강이','lee');
console.log(dog); //Dog { color: '빨강이' ,owner: 'lee' }
dog.sleep();
dog.eat();
dog.play();




