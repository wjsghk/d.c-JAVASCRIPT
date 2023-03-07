//논리연산자 Logicla Operator
//&& 그리고
//|| 또는

//if문안에 논리연사자들은 boolean형태로 값으로 변환 되면서 출력된다.
//조건문 안에서
const obj1 = {name: '🍌'};
const obj2 = {name: '🍇', owner: 'lee' };
if (obj1 && obj2){
    console.log('둘 다 true!!');
}
//둘 다 true!!



//조건문 밖에서
//단축평가 : short-circuit evaluation
let result = obj1 && obj2;
console.log(result);
//{ name: '🍇', owner: 'lee' }
let result1 = obj1 || obj2;
console.log(result1);
//{ name: '🍌' }  단) obj1이 false면 obj2가 출력된다!!!


//활용 예시
//&& 조건(if문)이 truty일때 && 무언가를 해야 할 경우
//|| 조건이 falshy일때 || 무언가를 해야 할 경우

function changeOwner(animal){
    if(!animal.owner){//animal의 owner 이 없을떄 에러를 던지겠다
        throw new Error('주인이 없네');
    }
    animal.owner = '바뀐주인!'
}

function makeOwner(animal){
    if(animal.owner){//animal의 owner 이 있을떄 에러를 던지겠다
        throw new Error('주인이 있네');
    }
    animal.owner = '새로운주인!'
}
obj1.owner && changeOwner(obj1); //obj1의 오너가 없어서 뒤에 함수 실행 안됨
obj2.owner && changeOwner(obj2); //obj2의 오너가 있으면 change함수 실행
console.log(obj1);//{ name: '🍌' }
console.log(obj2);//{ name: '🍇', owner: '바뀐주인!' }

obj1.owner || makeOwner(obj1); //obj1의 오너가 없어=>false여서 뒤에 함수 실행 
obj2.owner || makeOwner(obj2); //obj2의 오너가 있어 => true 뒤에 함수 실행안됨
console.log(obj1);//{ name: '🍌', owner: '새로운주인!' }
console.log(obj2);//{ name: '🍇', owner: '바뀐주인!' }



//null 또는 undefined인 경우를 확인할 떄 
let item; //= { price: 1 };
const price = item && item.price;
console.log(price);//1(주석해제할때 값)
//undefined  (주석있을때 값)


//기본값을 설정
//파라미터에 값을 넣은경우 hi
function print(message= 'hi'){
    //const text = message || 'hellow';
    console.log(message);
}
print();//hi
print(undefined);//hi
print(null);//null
print(0);//0

//default parameter 전달하지 않거나,undfefind설정
//|| 값이  falsy한경우 설정(할당) ; 0 ,-0 , null, undfefind, ''
function print1(message){
    const text = message || 'hellow';//false인 경우여서
    console.log(text);
}
print1();//hellow
print1(undefined);//hellow
print1(null);//hellow,기본값을 설정한경우와의 차이점
print1(0);//hellow,기본값을 설정한경우와의 차이점

