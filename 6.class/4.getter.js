//겟터와 셋터를 접근자 프로퍼티라고 한다.
class Student{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){//생성자(constructor)에 안넣은 이유는 새로 추가 학생의 이름이 업데이트가 안돼고 전에 학생으로 고정돼서 출력
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value){
        console.log(value);
    }
}
const student = new Student('수지' ,'김');
student.firstName = '안나';
console.log(student.firstName);//안나,속성이라
console.log(student.fullName);//김 안나, get를 사용하면 함수를 호출하듯이 안하고 속성을 불러오는 거 처럼 가능핟.
student.fullName = '김철수';// 김철수 set으로 할당(=)을해서
