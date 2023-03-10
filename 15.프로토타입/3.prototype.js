//생성자 함수
function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수 => 함수가 계속 중복되서 메모리 증가 그래서 프로토 타입으로 바꾸는 방법을 위해 주석처리
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
}
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2);
//Dog { name: '뭉치', emoji: '🐶' } Dog { name: '코코', emoji: '🐩' }     


console.clear();


// 프로토타입 레벨의 함수
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog3 = new Dog('뭉치', '🐶');
const dog4 = new Dog('코코', '🐩');
console.log(dog3, dog4);//Dog { name: '뭉치', emoji: '🐶' } Dog { name: '코코', emoji: '🐩' }
dog3.printName();//뭉치 🐶
dog4.printName();//코코 🐩

// 오버라이딩
// 인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨)
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName();//안녕!!

// 정적 레벨
Dog.hello = () => {
  console.log('Hello!');
};
Dog.hello();//Hello!
