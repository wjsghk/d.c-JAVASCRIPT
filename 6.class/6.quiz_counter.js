// 카운터 만들기
// 0이상의 값으로 초기화 한 뒤 하나씩 숫자를 증가할 수 있는 카운터를 만들기
// Counter 클래스 만들기


class Counter{
    #value;
    constructor(startValue){//외부에서 초기값을 받느다 ,isNaN 숫자가 아니거나
        if(isNaN(startValue) || startValue < 0){
            this.#value = 0;
        }else{
            this.#value = startValue;
        }
    }

    get value() {
        return this.#value;
    }

    increment = ()=> {
        this.#value++;
    };
}
const counter = new Counter(0);
counter.increment();//1
counter.increment();//2
console.log(counter.value);//2
