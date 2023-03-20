// 기본 자료형 - primitive type
let number = 273.14;
let string = 'Hello!';
let boolean = true;
console.log (typeof(number), typeof(string), typeof(boolean)); //number string boolean


//객체 자료형 - 기본 자료형을 객체로 만든 것을 Wrapper class라 불림
let numObj = new Number(273.14);
let strObk = new String('Hello!');
let boolObj = new Boolean(true);
console.log (typeof(numObj), typeof(strObk), typeof(boolObj));  //object object object

console.log(number == numObj, number === numObj); // true false 
//값은 같으나 type은 다름 자료형이 차이나서 false

let fruits = '사과,딸기,바나나'; //primitive type이지만 .을 찍어주면 자동으로 객체로 만들어줘서 매서드를 사용할수있다.
console.log(fruits.split(',')); // 콤마를 기준으로 split분리해서 arry로 만들어라라는 매서드 [ '사과', '딸기', '바나나' ]



