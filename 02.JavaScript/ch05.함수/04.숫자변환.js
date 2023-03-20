// 숫자 변환 내장(built-in) 함수

const a = '123.65', b = '0xff' , c = '23';

console.log(Number(a),Number(b)); //123.65 255 문자를 숫자로 변환
console.log(parseInt(a),parseFloat(a)) //123 123.65 
// parseInt:소수점이하를 자르고 정수로 만들어줌
// parseFloat: 소수로...
console.log(parseInt(b),parseFloat(b),parseFloat(c)) //255 0 23

console.log(parseInt('1401동') ,Number('1401동')); //1401 NaN  
//Number는 숫자가 아닌게 들어가면 NaN이 된다. 반면 parseInt는 최대한 숫자로 만들어준다.
console.log(parseInt('1401동503호')); //1401

