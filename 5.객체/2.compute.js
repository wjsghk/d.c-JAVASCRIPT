//MDN 객체로 작업하기: https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Working_with_Objects

const obj = {
    name: '엘리',
    age: 20,
};
// 정적접근: 코드를 작성하는 시점에 이미 어떤 property에 접근하는지 확인 가능함
// 동적접근: getValue 처럼 코드를 실행하는 단계에서 알 수 있음
//코딩하는 시점에,정적으로 접근이 확정됨
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용! =>주로 생성,삭제할때
function getValue(obj,key){
    return obj[key];//여기서 key는 매개변수
}
console.log(getValue(obj,'name'));//엘리

//추가
function addKey(obj,key,value){
    obj[key] = value;
}
addKey(obj,'job','engineer');
console.log(obj);//{ name: '엘리', age: 20, job: 'engineer' }

//삭제
function deleteKey(obj,key,value){
    delete obj[key];
}
deleteKey(obj,"job");
console.log(obj);//{ name: '엘리', age: 20 }

addKey(obj,'job','engineer');