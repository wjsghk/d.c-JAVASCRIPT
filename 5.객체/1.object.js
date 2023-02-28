 //Object literal{ key : value}
//  new Object()  객체생성1
//  Object.create(); 객체생성2
//key - 문자,숫자,문자열 ,심볼 들어간ㄷㅏ.
//value - 원시값, 객체(함수)들어간다.


let apple ={//왼쪽은 key값 오른쪽은 value값
    name : 'apple',
    'hello-bye' : '안뇽',//문자열을 쓰면 특수문자를 써서 연결이 가능하다.
    0:1,
    ['hello-bye1']:'안뇽!!',
}

//속성,데이터에 접근하기 위해서는 
console.log(apple.name);//apple, 마침표표기법 dot notation
console.log(apple['hello-bye1']);//안뇽!! ,대괄호 표기법 bracket notation

//속성추가
apple.emoji = '^^';
console.log(apple.emoji);//^^
console.log(apple['emoji']);//^^

//속성삭제
delete apple.emoji;
console.log(apple);//^^삭제됨

