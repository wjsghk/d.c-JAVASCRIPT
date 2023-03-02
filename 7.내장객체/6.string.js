//MDN String: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);//[String: 'Hello World!']
console.log(text);//Hello World!
console.log(text.length);//총 길이 12

console.log(text[0]);//인덱스 H 배열로 접근
console.log(text[1]);//e
console.log(text[2]);//l
console.log(text.charAt(0));//인덱스 H 함수로 접근
console.log(text.charAt(1));//e
console.log(text.charAt(2));//l

console.log(text.indexOf('l'));//2 왼쪽부터 시작
console.log(text.lastIndexOf('l'));//9 오른쪽부터시작

console.log(text.includes('tx'));//포함여부 => false
console.log(text.includes('h'));//포함여부 => false
console.log(text.includes('H'));//포함여부 => true

console.log(text.startsWith('He'));//시작이 He => true
console.log(text.endsWith('!'));//마지막이 ! =>true

console.log(text.toUpperCase());//대문자로 변환 HELLO WORLD! 
console.log(text.toLowerCase());//소문자로 변환 hello world!

console.log(text.substring(0, 2));//0부터시작해서 1까지 만 출력 He
console.log(text.slice(2));//2번재 부터 삭제 => llo World!
console.log(text.slice(-2));//뒤에서 2번째부터 삭제 => d!

const space = '            space       ';
console.log(space.trim());//공백제거  =>space

const longText = 'Get to the, point';
console.log(longText.split(' '));//공백으로 분리 =>[ 'Get', 'to', 'the,', 'point' ]
console.log(longText.split(', ', 2));//콤마로 분리 뒤에 2개만 출력 =>[ 'Get to the', 'point' ]
