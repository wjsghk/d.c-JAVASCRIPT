//try catch finally
function readFile(path){
    throw new Error('파일이 없음1')
    return '파일의내용';
}

function processFile(path){
   let content;
   try{
    content = readFile(path);
   }catch(error){
    console.log(error);
    content = '기본내용';
   }finally{
    console.log('성공하든 실패하든 정리할 수 있음');
   }
    const result = 'hi ' + content;
    return result;
}

const result = processFile('경로');
console.log(result);
//try catch문 작성 전 결과값
// Error: 파일이 없음1
//     at readFile (C:\Users\user\Desktop\pratice\dreamcoding\2.error.js:3:11)
//     at processFile (C:\Users\user\Desktop\pratice\dreamcoding\2.error.js:8:21)
//     at Object.<anonymous> (C:\Users\user\Desktop\pratice\dreamcoding\2.error.js:13:16)


//try catch문 작성 후  결과값
//성공하든 실패하든 정리할 수 있음
//hi 기본내용