//함수 선언문 이란 => function name() { }
//함수 표현식 이란 => const name = function () { }

let add = function(a,b){//함수를 add라는 변수에 할당함
    return a + b;
};
console.log(add(1,2));//3

//화살표함수  const name = () => { }
add = (a,b) => { 
    return a + b;
};
console.log(add(1,2));//3
