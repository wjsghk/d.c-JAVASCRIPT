//자기 자신의 속성을 접근할때는 this를 쓴다
const apple = {
    name:'apple',
    display:function(){
        console.log(`${this.name}: 빨간사과`);
    },
};

apple.display();//apple: 빨간사과