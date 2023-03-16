//Constant 값이 변하지 않는 수. 항상 같은수
const constant = 'Hello';
console.log(constant);
// constant += 'World'; //runtime error 발생

const obj = {x: 1, y: 2}
//여기서 obj 참조형 변수 obj의 주소를 찾아가나 주소를 바꾸는게 아님 메모리 포인팅 (c언어에서 포인터)
//여기서는 const가 둘러싼 주소를 가리키는것.
obj.x = 10;
obj.y = 20;
console.log(obj); //{ x: 10, y: 20 }
