
//4.inheritance의  프로토타입을 클래스로 바꿔보기
// 클래스를 베이스로한 객체지향프로그래밍
class Animal {
  constructor(name, emoji) {//클래스는 생성자가 있어야한다.
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log('같이 놀자옹!');
  }
}
class Tiger extends Animal {
  hunt() {
    console.log(`사냥하자! ..🐇..`);
  }
}

const dog1 = new Dog('뭉치', '🐶');
const tiger1 = new Tiger('어흥', '🐯');
dog1.printName();//뭉치 🐶
tiger1.printName();//어흥 🐯
dog1.play();//같이 놀자옹!
tiger1.hunt();//사냥하자! ..🐇..

console.log(dog1 instanceof Dog);//true
console.log(dog1 instanceof Animal);//true
console.log(dog1 instanceof Tiger);//false
console.log(tiger1 instanceof Tiger);//true
