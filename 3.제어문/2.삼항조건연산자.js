//삼항조건연산자
let fruit = 'orange';//null
if (fruit == 'apple'){
    console.log('false');
}
else{
    console.log('null');
}

fruit === 'apple' ? console.log('true') :  console.log('false');//false

let emoji = fruit === 'apple' ? 'x' : '0';
console.log(emoji);//0