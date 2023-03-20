let maria = {이름:'마리아', 나이:25, 직업:'학생'};
console.log(maria.나이); //25

let name = '제임스';
let age = 25;
let job = '게이머';
let james = {name:name, age:age, job:job};
console.log(james); //{ name: '제임스', age: 25, job: '게이머' }

//객체에 대한 반복문은 for ~ in 을 사용한다.
for (let key in maria)
console.log(key, ':', maria[key]);
/* 이름 : 마리아
나이 : 25
직업 : 학생 */

// ES-6 (2015년도에 제정된 표준)
//key 값과 value를 가리키는 변수의 이름이 동일하면 변수명 생략 가능
let james2 = {name, age, job}; //{name:name, age:age, job:job};을 의미

//JSON(JavaScript Object Notation)
//  외부와 데이터를 주고 받을 때 사용됨
//  사실상의 업계 표준(de facto standard)
// object를 문자열로 바꿔서 json형태로 데이터를 주고받는다.

let externalForm = JSON.stringify(james); //문자열로 바꾼다.
console.log(externalForm); //{"name":"제임스","age":25,"job":"게이머"} 
console.log(typeof externalForm); // string 이출력된 전체가 object가 아니라 문자열이다

let person = JSON.parse(externalForm);
console.log(person); // { name: '제임스', age: 25, job: '게이머' }
console.log(typeof person); // object
console.log(person.name === james.name && person.age === james.age); // true