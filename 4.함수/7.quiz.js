//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야함
// 5, 순회하는 숫자를 다 출력하고 싶음
// 5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// hint !! function iterate(max,action)
function iterate(max,action){
    for(let i = 0; i< max; i++){
        action(i);
    }
}
function log(num){
    console.log(num);
}
function doubleLog(num){
    console.log(num * 2);
}

//함수 호출 => 함수명 ( , );
iterate(3,log);//0,1,2
iterate(3,doubleLog);//0,2,4
//화살표함수로 나타내기
iterate(3,(num) => console.log(num));//0,1,2
iterate(3,(num) => console.log(num * 2));//0,2,4