function loop() {
  const array = [];
  // var과 let의 차이점!
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func());
//var를 출력한경우 5   <=  var는 블록스코프가 없기 때문에
//var를 let으로 할 때 출력은 0,1,2,3,4