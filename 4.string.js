//문자열 타입
let string = '안녕하세요';
string = '"안녕\nlee\t\t"';//\n은 줄바꿈,\t는 띄어쓰기
console.log(string);

//유니코드 사이트
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String

let id = 'lee';
let greetings = "'안녕'" + id + "\n즐거운 하루 보내요!";
console.log(greetings);

//탬플릿 리터럴 => ``
let greetings_sub = `'안녕, ${id}
즐거운 하루 보내요!`
console.log(greetings_sub);