//논리연산자 
//&& 그리고 , || 또는 , ! 부정(단항연산자에서 온것)
//!! 불리언값으로 변환 (단항연산자 응용버전)

let num = 8;
if(num >= 0 && num < 9){
    console.log('굿');
}//굿

let or = 8;
if(or >= 0 || or > 20){
    console.log('굿');
}//굿

let not = 8;
if(!(not >= 0 || not > 20)){
    console.log('굿');
}//부정이 돼서 false가 된다 그래서 실행이 안됨

if(num != 9){
    console.log('okay');
}//okay

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

console.log(!'text');//false
console.log(!!'text');//true 문자열을 불리언으로 변환시켜서