//퀴즈

let num =2;
//num의 숫자가 짝수이면 짝,홀수이면 홀 출력

//if
if(num % 2 == 0){
    console.log('짝');
}else{
    console.log('홀');
}
//짝

//삼항연산자 1번방식
num % 2 ==0 ? console.log('짝') : console.log('홀');//짝

//삼항연산자 2번방식
let result = num % 2 == 0 ? '짝' : '홀';
console.log(result);//짝
