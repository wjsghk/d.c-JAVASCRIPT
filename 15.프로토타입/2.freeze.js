// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 카피만 꽁꽁 얼림!)
const ellie = { name: '엘리' };// (단, 얕은 꽁꽁 얼림!)
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);//1. false를 한걸 간단하게 freeze로 얼리기
dog.name = '멍멍';
console.log(dog);//{ name: '와우', emoji: '🐶', owner: { name: '엘리' } } 변경안됨
dog.age = 4;
console.log(dog);//{ name: '와우', emoji: '🐶', owner: { name: '엘리' } } 추가안됨
delete dog.name;
console.log(dog);//{ name: '와우', emoji: '🐶', owner: { name: '엘리' } } 삭제안됨
ellie.name = '엘리얌';
console.log(dog);
//{ name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }  <= (단, 얕은 꽁꽁 얼림!)


// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);//{ name: '와우', emoji: '🐶', owner: { name: '엘리얌' } }
cat.name = '냐옹';
console.log(cat);//{ name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
delete cat.emoji;
console.log(cat);//{ name: '냐옹', emoji: '🐶', owner: { name: '엘리얌' } }
console.clear();
console.log(Object.isFrozen(dog));//true  동결확인
console.log(Object.isSealed(cat));//true  밀봉확인

// 확장 금지 preventExtensions 추가만 ❌ 값을 수정,삭제는 가능
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));//false <= 확장확인 
tiger.name = '어흐응';
console.log(tiger);//{ name: '어흐응' }
delete tiger.name;
console.log(tiger);//{}
tiger.age = 1;
console.log(tiger);//{}
