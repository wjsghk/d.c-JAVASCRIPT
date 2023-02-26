//원시타입은 값이 복사되어 전달됨
let a =1;
let b =a;//1
b = 2;
console.log(a);
console.log(b);

//객체타입은 참조값(=reference,메모리주소)가 복사되어 전달됨
let apple = {
    //예를들어 주소가 0x1234
    name:'사과',
};

let orange =apple;//주소가 0x1234
orange.name = '오렌지';
console.log(apple);//
console.log(orange);


