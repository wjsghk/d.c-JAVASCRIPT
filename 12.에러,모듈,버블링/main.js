
//import {increase as increase1} from './counter.js';
//increase를 increase1으로 바꾸고 싶을때 as쓰고 밑에 함수도 바꿔준다.
import {increase,getCount } from './counter.js';
increase();//1
increase();//2
increase();//3
const count = getCount();
console.log(count);


