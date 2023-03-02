//한국어 버전: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference
//래퍼객체(wrapper 램핑 감싼다.)
//원시값을 필요해  따라서관련된 빌트인 객체로 변환한다.   
const number = 123;//number 원시 타입이다.

console.log(number.toString());//123(문자열) 래퍼
//number 원시타입을 감싸고 있는 Number 객체로 감싸짐
//위에 숫자리터럴를 문자열로 변환해준다. => 래퍼객체

console.log(number);//123(숫자) 다시 number 원시 타입이다.

