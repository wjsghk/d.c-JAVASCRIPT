// 프로토타입을 베이스로한 객체지향 프로그래밍
function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // super(name, emoji)
  Animal.call(this, name, emoji);//call은 static 함수 / 3,4줄에 this를 이용하여 name, emoji를 이용해줘 / Animal를 call호출하는것은 위에 super와 동일한 기능
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);//Object를 Animal의 프로토 타입을 만들어서 Dog프로토타입에 연결해주세요

Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐇..');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play();//같이 놀자옹!
dog1.printName();//멍멍 🐶
const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();//어흥 🐯
tiger1.hunt();//사냥하자! ..🐇..


// 상속자확인
console.log(dog1 instanceof Dog);//true  dog1은 자식 Dog는 부모
console.log(dog1 instanceof Animal);//true
console.log(dog1 instanceof Tiger);//false
console.log(tiger1 instanceof Dog);//false
console.log(tiger1 instanceof Animal);//true
console.log(tiger1 instanceof Tiger);//true
