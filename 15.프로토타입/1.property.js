//MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties

const dog = { name:'lee' , emoji:'개'};

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));
// [ 'name', 'emoji' ]
// [ 'lee', '개' ]
// [ [ 'name', 'lee' ], [ 'emoji', '개' ] ]

//key여부 확인
console.log('name' in dog);//true
console.log(dog.hasOwnProperty('name'));//true,두번째 방법


//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const des = Object.getOwnPropertyDescriptors(dog);//s => 전체
console.log(des);
/**
 * {
  name: {  value: 'lee', writable: true, enumerable: true, configurable: true},
  emoji: { value: '개', writable: true, enumerable: true, configurable: true }
}
                //값을 수정할수있는지 , 값을 열거할수있는지, key값을 수정,삭제할수있는지
 */
const desc = Object.getOwnPropertyDescriptor(dog,'name');//
console.log(desc);

//프로퍼티를 선언을 하고 수정한다.
Object.defineProperty(dog,'name',{
    value:'멍멍',
    writable: false,
    enumerable:false,
    configurable:false,
});
console.log(dog.name);
//멍멍

console.log(Object.keys(dog));
//[ 'emoji' ] 위에 열거를 하지 않게 수정해서

delete dog.name;
console.log(dog.name);
//멍멍 위에 삭제를 하지 않게 수정해서


const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
//{ firstName: '영희', lastName: '김' }