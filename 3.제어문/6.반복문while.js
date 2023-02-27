//while(조건) { }
//MDN while: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/while
//조건이 false가 될때까지 { } 코드를 반복실행
let num = 5;
while(num >= 0){
    console.log(num);
    num--;
}
//5...0

let isActive = false;//true로 바꾸면 무한재생됨 이유는 while( )조건식으로 뒀기때문에
let i = 0;
while(isActive){
    console.log('살아있어');
    if(i===10){
        break;//i가 10기전에 무한루프 
    }
    i++;//i가 10기전에 무한루프 
}

do{ 
    console.log('do_while 살아있어');
}while(isActive);
// while과의 차이점 while은 참일때만 실행하지만 isActive가 false여도 한번은 무조건 실행 do 때문에