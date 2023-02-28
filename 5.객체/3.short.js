const x = 0;
const y = 0;
const coordinate = { x:x, y:y };//{ x, y}로도 축약해서 사용가능
console.log(coordinate);//{ x: 0, y: 0 }

//함수로 나타내기
function makeObj(name,age){
    return{
        name: name,
        age: age,
    };
}