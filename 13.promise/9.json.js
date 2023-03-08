// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한
// 오브젝트 형태의 텍스트 포맷  
//오브젝트를 JSON으로 변환 or JSON를 오브젝트로 변환
//밑에 예시
// stringify(object): JSON 
// parse(JSON): object 
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing란? 객체를 문자열!!로 변환
const json = JSON.stringify(ellie);
console.log(ellie);//{ name: 'ellie', age: 20, eat: [Function: eat] }
console.log(json);//{"name":"ellie","age":20} 함수는 객체가 아니라서 출력 안된다.

// 역직렬화 Deserializing란 문자열!! 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj);//{ name: 'ellie', age: 20 }
