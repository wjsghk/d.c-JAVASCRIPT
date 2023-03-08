// 주어진 seconds(초)가 지나면 callback함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자! ⏱
function runInDelay(callback, seconds) {
  if (!callback) {
    throw new Error('callback함수를 전달 해야 함');
  }
  if (!seconds || seconds < 0) {
    throw new Error('seconds는 0보다 커야 함');
  }
  setTimeout(callback, seconds * 1000);
}

try {
  runInDelay(() => {//실행문
    console.log('타이머 완료!');
  }, 0);
} catch (error) {
  console.log('실행안해~');
}

//타이머완료(2초뒤에 실행)
//2초보다 작을경우 함수가 종료되지 않고 실행됨 에러를 잡았기 때문에