//조건문 스위치
//정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우

let day = 6;//0:월요일, 1:화요일 ...6:일요일
let dayName;
if(day === 0){
    dayName = '월요일';
}else if (day ===1){
    dayName = '화요일';
}else if (day === 2){
    dayName = '수요일';
}else if (day === 3){
    dayName = '목요일';
}else if (day === 4){
    dayName = '금요일';
}else if (day === 5){
    dayName = '토요일';
}else if (day === 6){
    dayName = '일요일';
}

//스위치로 나타내기
switch(day){
    case 0:
        dayName = '월요일';//변수할당
        break;
    case 1:
        dayName = '화요일';
        break;
    case 2:
        dayName = '수요일';
        break;
    case 3:
        dayName = '목요일';
        break;
    case 4:
        dayName = '금요일';
        break;
    case 5:
        dayName = '토요일';
        break;
    case 6:
        dayName = '일요일';
        break;
    default://else와 같은 기능 이라고 생각
        console.log('해당요일이 없음!');
}
console.log(dayName);//일요일
//참고 break;를 사용하지 않으면 끝가지 가서 마지막 코드사 실행된다.

//break를 사용하지 않는경우 
let condition = 'okay';//okay,good => 좋음!, bad =>나쁨!
let text;
switch(condition){
    case 'okay':
    case 'good':
     text = '좋음!';
     break;
    case 'bad':
     text = '나쁨!';
     break; 
}
console.log(text);//좋음!

//MDN switch: https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/switch