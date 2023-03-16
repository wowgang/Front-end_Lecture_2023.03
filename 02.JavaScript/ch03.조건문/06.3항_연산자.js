//조건 연산자, 3항 연산자
//3항 연산자 (조건)? 참일때 값 : 거짓일때 값
// ex_) ${menu} ? 'active' : ''
let num = 8;
let evenOdd = (num % 2 == 0) ? '짝수' : '홀수';
console.log(`${num} 은/는 ${evenOdd}입니다.`);

let variable;
// let variable = 3;
variable = (typeof(variable) == 'undefined') ? 0 : variable;
console.log(variable);
