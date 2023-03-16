//자료형 변환
//강제 변환
console.log(123, String(123)); // 123 123 숫자number,문자열string  S대문자로 써줘야함
console.log(Number('101'), Number(true), Number(false), Number('Hello')); // 101 1 0 NaN
//NaN : not a number  ‘숫자로 변환할 수 없는 문자열’을 Number( ) 함수로 변환하면 ‘NaN’을 출력
//다음의 경우를 제외하면 모두 참이 됨
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(NaN), Boolean(null));
// false false false(공백없음) false false false
console.log(Boolean(0.000001), Boolean(' '),Boolean({}));
//true true(공백) true

//자동 변환
// + 인 경우 boolean -> number -> string
console.log('bool '+ true, 'integer ' + 123 , 123 + true); 
// bool true integer 123 124 >>124만 숫자 나머지 문자
//문자 더하기 boolean은 문자 , 문자 더하기 숫자는 문자 , 숫자 더하기 boolean은 숫자

// -, *, / 인 경우에는 string -> number로 바뀜
console.log('52' - 273, '8' * 8, '4' / 2); // -221 64 2

//두개의 값이 똑같으냐? 
//1) 변환된 값이 같으면같다. ==
console.log(52 == 52.0, 52 == '52'); // true true
console.log(true == 1, false == 0.0); // true true

//2) 변환된 값과 자료형이 일치해야 같다. === (일치 연산자)
console.log(52 === 52.0, 52 === '52');  //true false
console.log(true === 1, false === 0.0); //false false


