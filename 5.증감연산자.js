//증감 연산자 (++ --)
let a = 0;
console.log(a);//0

a++;//a = a + 1;
console.log(a);//1

a--;//a = a - 1;
console.log(a);//0
console.clear;
//주의!
//a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴
//++a 값을 먼저 증가하고 , 필요한 연산을 함
a = 0;
console.log(a++);//0
console.log(a);//1

let b = a++;
console.log(b);//1 이유는 할당연산자(=)먼저 실행해서
console.log(a);//2 이유는 b에서 실행하고 나서 이제 a는 값이 증가해서