//.변수 
 let pi = 3.1415926535;
 let radius = 10 ; //반지름
 console.log('둘레:', 2 * pi * radius); //둘레: 62.83185307  //2 x 3.14 x 반지름
 console.log('면적:', pi * radius **2); //면적: 314.15926535  //3.14 x 반지름의 제곱
 console.log(`면적:, ${pi * radius **2}`); //면적:, 314.15926535 ${pi * radius **2}문자로 바뀜

 //복합 대입 연산자
 let a = 1;
 a += 2; // == a = a + 2;  >> 3
console.log(a);

//1~10까지 합
let sum = 0; //초기화
for(let i = 1; i <= 10; i++)
sum += i;  //자신하고 더한 그값........



let str = ''; //빈 문자열
str += 'A quick brown fox';
str += ' ' + 'jumps over the lazy dog';
console.log(str); //A quick brown fox jumps over the lazy dog 알파벳 25개 다 들어간 유명한 말

//증감 연산자
let x = 0, y = 0;
console.log(x++, ++y); //++ 인크리먼트 .post-increment , pre-increment >> 0 1
console.log(x, y); // >> 1 1
console.log(x--, --y); //-- 인크리먼트 .de-increment , de-increment >> 1 0
console.log(x, y); // >> 0 0

let aa = 0, bb = 0;
console.log(aa--, --bb); //-- 인크리먼트 .de-increment , de-increment >> 0 -1
console.log(aa, bb); // >> -1 -1

//나머지 자료형
//4.함수(function)
console.log(typeof function() { }); //function
console.log(typeof(() => {}));  //화살표(arrow)함수 , 람다 합수 function

//5.객체(object)  
// img의 속성src같은것 표현 됨 src:주소
let obj = {x: 1, y: 2};
console.log(typeof obj); //object
console.log(obj.x, obj.y); // 1 2

//6. undefined
let alpha;
console.log(typeof alpha, typeof beta); //초기화하지 않은 변수, 선언하지 않은 변수
//undefined undefined 정의 안된것도 하나의 타입이 된다.
alpha = 123;
console.log(typeof alpha); //number


