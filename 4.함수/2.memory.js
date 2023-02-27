function add(a,b){
    console.log(a);//1
    console.log(b);//2
    return a + b;
}
const sum = add;
console.log(add(1,2));//3
console.log(sum(1,2));//add랑 똑같기 떄문에 1,2,3 출력된다.

