//MDN Date: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
// UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
console.log(new Date()); //현재시간 =>2023-03-02T02:23:17.559Z
console.log(new Date('Jun 5, 2022'));//날짜 출력=>2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00'));//시간 출력 =>2022-12-16T18:24:00.000Z

console.log(Date.now());//UTC기준=> 1677723797569 
console.log(Date.parse('2022-12-17T03:24:00'));//1671215040000

const now = new Date();
now.setFullYear(2023);//2023
now.setMonth(0); // 0은  1월 ,1은 2월... 
console.log(now.getFullYear());//2023 
console.log(now.getDate()); // 0: 1
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime());
console.log(now);//2023-01-02T02:30:25.741Z

console.log(now.toString());//Mon Jan 02 2023 11:23:17 GMT+0900 (대한민국 표준시)
console.log(now.toDateString());//Mon Jan 02 2023
console.log(now.toTimeString());//11:30:36 GMT+0900 (대한민국 표준시)
console.log(now.toISOString()); // ISO 8601 형식 =>2023-01-02T02:31:05.691Z
console.log(now.toLocaleString('en-US'));//미국형식 =>1/2/2023, 11:30:59 AM
console.log(now.toLocaleString('ko-KR'));//한국형식 =>2023. 1. 2. 오전 11:30:48
