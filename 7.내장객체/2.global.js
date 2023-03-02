//object를 통하지 않고 전역으로 바로 호훌할수있는 속성과 함수
console.log(globalThis);
console.log(this);//{}
console.log(Infinity);//Infinity
console.log(NaN);//NaN
console.log(undefined);//undefined

eval('const num = 2; console.log(num)');//2
console.log(isFinite(1));//true
console.log(isFinite(Infinity));//false
console.log(parseFloat('12.43'));//12.43
console.log(parseInt('12.43'));//12(정수)

//URL(URI,Uniform Resoruce Identitier의 하위개념)
//아스키 문자로만 구성되어야 함
//한글이나 특수문자는 이스케이프 처리해야한다.
const URL = 'http://드림코딩.com';
const encoded = encodeURI(URL);
console.log(encoded);
//http://%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com 이스케이프 처리방식

const decoded = decodeURI(encoded);
console.log(decoded);//http://드림코딩.com

//전체 URL이 아니라 부분적인 것은 Component이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));
//%EB%93%9C%EB%A6%BC%EC%BD%94%EB%94%A9.com

