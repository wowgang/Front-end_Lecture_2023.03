// error.error.error();  //죽는것 ReferenceError: error is not defined
// 에러를 매니지한다.
try {
    error.error.error(); 
} catch(e) {
    console.log(e.name);  //ReferenceError
    console.log(e.message); //error is not defined
}

console.log('This is end.');