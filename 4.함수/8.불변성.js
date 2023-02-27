//함수내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지않다
//상태변경이 필요한 경우에는, 새로운 상태를(=오브젝트,값) 만들어서 반환해야함
//왜나하면 원시값은 값에 의해 복사가 가능하지만 객체값은 참조에 의해 복사(메모맂주소)여서 좋지않는 방법이다
function display(num) {
    num = 5;//내부에서 변경하는것은 좋지않는 방법
    console.log(num);
}
const value = 4; //값
display(value);//5
console.log(value);//4

function displayObj(obj){
    obj.name = 'Bob';//내부에서 재할당 좋지않는 방법!!!!절대 안돼!!!!
    console.log(obj);
}
const ellie = { name : 'Ellie'};
displayObj(ellie);
//오브젝트, { name: 'Bob' } 위에  obj.name = 'Bob'; 없기전에는 { name: 'Ellie' }이 출력된다.
console.log(ellie);
//{ name: 'Bob' }

//내부에서 재할당은 좋지않은 방법이기에 다른 방법을 해야한다.
//배열부분에서 다시 언급 예정
function changeName(obj){//이름부터 변경하는 느낌을 주도록!!
    return{...obj, name: 'Bob'};//반환할때는 새로운 오브젝트 만들기!
}


