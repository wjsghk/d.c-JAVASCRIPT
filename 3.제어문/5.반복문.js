//반복문 for
// MDN for: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/for
//for(변순선언문; 조건식; 증감식) { }

//실행순서:
//1.변수선언문
//2. 조건식의 값이 참이면 { } 코드블럭을 수행
//3. 증감식을 수행
//4.조건식이 거짓이 될 떄까지 2번과3번 반복수행

for(let i = 0; i < 5; i++){
    console.log(i);//0,1,2,3,4
}

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        console.log(i,j);//0,0...0,4...4.1...4.4
 }
}

console.clear();

//반복문 제어 : continue,break;
for(let i = 0; i <13; i++){
    if(i===5){
        console.log('i가 드디어 5이다!!');
        //break;//5가되면 코드 종료=>0...4,!가 드디오 5이다
        continue;//5를 건더띄고 다음 코드실행=>0...4,(5제외)!가 드디오 5이다...13
    }
    console.log(i);
}