//숫자 맨앞에 사용x ,대소문자 구분,공백x
//클래스는 대문자로 시작
//변수,함수,속성,메소드의 이름은 항상 소문자로 시작
//여러 단어로 된 식별자는 각 단어의 첫글자를 대문자 myBook =camel낙타 location(자바), my_book =snake(파이썬)
// alt + shift + a 여러줄 주석
console.log(Math.PI); 
console.log(Math.exp(0)); //e의0승은 1
console.log('hello world'); 
console.log('1'); 
console.log(1); 
//cmd에 node 치고 직접 스크립트 하면 출력되는것을 REPL이라고 함 read evaluate pring look 개발자 모드로 들어가서 콘솔에 치는것
//컨트롤 +d = node에서 빠져나오기

//자바스크립트의 자료형
//1. Number
//가감승제 

console.log(5 / 2); //2.5
console.log(5 % 2); //1  modulo, 나머지계산 홀,짝,약수,배수 확인가능
//60 약수의 합 
console.log(2**10); // 2의 10제곱 ,1024
console.log(1.3e8); // 1.3곱하기 10의 8승 1.3 x 10 ** 8 130000000
console.log(1.3e-8); // 1.3곱하기 10의 8승 1.3 x 10 ** -8 1.3e-8 

// 2.문자열(String)
//큰따옴표 (""더블코트),작은따옴표('') 사용
//이스케이프 문자 
// console.log("She said "I love you."")

console.log('She said "I love you."'); // She said "I love you."
console.log('She said \"I love you.\"'); //She said "I love you."
console.log('She said \tI love you.'); // \t 탭  She said        I love you.
console.log('She said \nI love you.'); // \n 줄바꿈 
/* She said
I love you.
 */
console.log('back slash(\\) 기호를 사용할때는 \\ 두개를 쓰면 됩니다.');

let hello = '안녕하세요?';
console.log(hello[0], hello[5]); //안 ?  /공백으로 구분해서 나옴

//template literal(`) 백코트 
let a = 2, b =3;
console.log('2 더하기 3을 한 결과는', 2 + 3 , '입니다.'); // 2 더하기 3을 한 결과는 5 입니다.
console.log(a, '더하기' ,b , '을 한 결과는', 2 + 3 , '입니다.'); // 2 더하기 3을 한 결과는 5 입니다.
console.log(`2 더하기 3을 한 결과는 ${2+3} 입니다.`); // 2 더하기 3을 한 결과는 5 입니다.
console.log(`${a} 더하기 ${b}을 한 결과는 ${2+3} 입니다.`); // 2 더하기 3을 한 결과는 5 입니다.
console.log(`She said "I love you."`); //She said "I love you."
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`) //올해는 2023년 입니다.

let aaa = 2, bbb =3;
console.log(a + '더하기' + b + '을 한 결과는'+ 2 + 3 + '입니다.'); 
//다 문자임  2더하기3을 한 결과는23입니다.

//3. 논리형(Boolean)
console.log(typeof(true), typeof false); //boolean boolean
console.log(2 == 2.0); //true
console.log(2 == 2.0, 5 <= 4); //true false
console.log('가나다' > '마바사'); // false 사전식으로 생각 앞에나온게 작은것으로 생각.문자열에서도 순서가있다(사전순서 앞에가 작은수 뒤에가 큰수)

console.log(!('가나다' > '마바사')); //true ! = not
// x > 8 , x < -3
let x = 10;
console.log(x > 8 || x < -3);  // x > 8 또는 or x < -3  >> true |(버티칼바)
// 0 <= x <= 5
console.log(x >= 0 && x <= 5);  // 0 <= and x <= and 5   >> false
console.log(true > 10); // true가 1로 자동 변환되어 비교가 됨
//  false   true는 정수로 비교연산했을시 1 (자동형변환)/ false=0

 







