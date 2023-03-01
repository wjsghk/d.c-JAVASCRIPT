//정직원과 파트타임 직원을 나타낼 수 있는 클래스를 만들어보자
// 지원들의 정보 : 이름 ,부서이름,한달 근무 시간
// 매달 직원들의 정보를 이용해서 한달 월급을 계산할 수  있다.
// 정직원은 시간당 만원
// 파트타임직원은 시간당 팔천원

class Employee {
    constructor (name, department, houersPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.houersPerMonth = houersPerMonth;
        this.payRate = payRate;
    }
    calculatePay(){
        return this.houersPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    constructor (name, department, houersPerMonth, payRate) {
        super(name, department, houersPerMonth, 10000);
    }
}

class PartTimeEmployee extends Employee {
    constructor (name, department, houersPerMonth, payRate) {
        super(name, department, houersPerMonth, 8000);
    }
}


const lee = new FullTimeEmployee ('리', '인사', '240');
const kim = new PartTimeEmployee ('김', '홍보', '120');

console.log(lee.calculatePay());
console.log(kim.calculatePay());