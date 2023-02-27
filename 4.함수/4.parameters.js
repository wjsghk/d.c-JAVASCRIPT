//매개변수가 없을 때 (ex add();)기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능 한 arguments 객체에 저장됨
//매개변수 기본값을 Default Parameters a = 1,b = 1
function add(a,b){
    console.log(a);//1
    console.log(b);//2
    console.log(arguments);//[Arguments] { '0': 1, '1': 2, '2': 3 }
    return a + b;
}
add(1,2,3);

//Rest 매개변수를 Rest Parameters이라고 한다.뒤에 다시 나올예정이라 읽어보기

function sum(a,b,...numbers){
console.log(a);//1
console.log(b);//2
console.log(numbers);//[ 3, 4, 5, 6, 7, 8 ] 배열로 출력됨
}
sum(1,2,3,4,5,6,7,8);