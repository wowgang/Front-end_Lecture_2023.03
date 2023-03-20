// Number 객체

let numberFromLiteral = 273; //273을 리터럴이라고 함
let numberFromConstructor = new Number(273); //Number라는 객체를 사용하려면 new라는 연산자 사용

const pi = Math.PI;
console.log(pi); //3.141592653589793 숫자
console.log(pi.toExponential()); //3.141592653589793e+0 문자
console.log(pi.toFixed(5));  //소수점이하 5자리까지 3.14159 문자
console.log(pi.toPrecision(3)); //유효숫자를 3자리 3.14 문자

console.log(Number.MAX_VALUE,Number.MIN_VALUE); 
//1.7976931348623157e+308 5e-324 숫자 가장큰수.가장 작은수
console.log(Number.MAX_SAFE_INTEGER,Number.MIN_SAFE_INTEGER);
//9007199254740991 -9007199254740991 숫자 구천칠조 정수를 이정도의 크기까지 표현할수있다
console.log(Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY);
//-Infinity Infinity 숫자 

console.log(Math.pow(2,53) -1 ); // 2의 53승 빼기 1
// 9007199254740991 Number.MAX_SAFE_INTEGER 정수를 이정도의 크기까지 표현할수있다.
