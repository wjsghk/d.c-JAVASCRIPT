// [Symbol.iterator](): Iterator{next():{Value,done}};
// 0부터 10이하 까지 숫자의 2배를 순회하는 이터레이버(반복자)만들기!
// 0,1,2,3....9
// 0,2,4,6....18

const multiple = {
    [Symbol.iterator](){
        const max = 10;
        let num = 0;
        return{
            next(){
                return{value: num++ * 2 , done: num > max };
            },
        };
    },
};
for(const num of multiple){
    console.log(num);
}
// 0
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18