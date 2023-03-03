// const multiple = {
//     [Symbol.iterator](){
//         const max = 10;
//         let num = 0;
//         return{
//             next(){
//                 return{value: num++ * 2 , done: num > max };
//             },
//         };
//     },
// };

//제너레이터 ( function*) 생성기라고 생각하자
function* multipleGenerator() {
    for(let i = 0; i < 10; i++){
        yield i **2;
        //return과 비슷하지만 사용자가 원할때까지 기다렸다가 원할때 하나씩 실행한다.
    }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);
//0 false  제너레이터를 사용하면서 원래는 0~9까지가 출력되야하지만 0만 출력됨 

next = multiple.next();
console.log(next.value, next.done);
//1 false  제너레이터를 사용하면서 원래는 0~9까지가 출력되야하지만 1만 출력됨 