//1에서 100까지 합 구하기
let sum = 0;
for (let i =1; i <= 100; i++) 
    sum += i;
console.log(`1~100 정수의 합= ${sum}`); //1~100 정수의 합= 5050
//console태그는 for문이 끝나고 실행되는것이라 뒤에 배치해야함

// 1에서 10까지 곱 구하기 
let prod = 1 ; // 곱하기는 초기값 1이어야함 (0이면 다 0이니까)
for (let i = 1; i <= 10; i++)
    prod *= i;
console.log(`1~10 정수의 곱= ${prod}`); //1~10 정수의 곱= 3628800

//배열의 데이터를 하나의 문자열로 만들 때
let fruits = ['사과', '배', '귤', '딸기'];
let fruitStr = ''; //초기값 empty string  빈 스트링
for (let fruit of fruits)
    fruitStr += fruit;
console.log(fruitStr); //사과배귤딸기

