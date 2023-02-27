//return을 명시적으로 하지 않으면 자동을 undefined이 반환됨!
function add(a,b){
    //return a + b;
}
const result = add(1,2);
console.log(result);//retrun을 주석 해서 => undefined


//return을 함수 중간에 하게 되면 함수가 종료됨
//사용 예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print(num){//num을 파라미터
    if(num < 0){
        return;//(return;= return undefiend;)즉시종료 계념
    }
    console.log(num);
}
print('12');// num이 0 보다 커서 12출력
print('-12');//실행안됨