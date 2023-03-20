// 선언적 함수
function add(a, b) {   //a,b -parameter, argument,인수 라고한다. 
    return a + b;
}
console.log(add(3, 4));  //7
console.log(add(5, 8));  //13

//익명 함수
const anonymousSum = function (a, b) {   //변수명으로 함수를 쓸수있다. 자바스크립트만 가능
    return a + b;
}
console.log(anonymousSum(3, 4));  //7
console.log(anonymousSum(5, 8));  //13

//화살표 함수 ,람다 함수 (중요 다른언어에도 나오는 형식)
const arrowSum = (a, b) => a + b;
console.log(arrowSum(3, 4));  //7
console.log(arrowSum(5, 8));  //13

//Math.random()  입력값 없이 사용하는 함수
//parseInt(5,6) argument가필요함
