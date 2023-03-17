// 어떤 양의 정수의 약수 구하기
let n1um = 12;
for (let i = 1; i <= 12; i++) {
    if (n1um % i == 0)
        console.log(i);
}
/* 
1
2
3
4
6
12 */

let num = 12;
let divisors = []; // empty array
for (let i = 1; i <= 12; i++) {
    if (num % i == 0)
       divisors.push(i);
}
console.log(`${num}의 약수: ${divisors}`); //12의 약수: 1,2,3,4,6,12


//두 자연수의 공약수  //3항 연산자 (조건)? 참일때 값 : 거짓일때 값
let num1 = 24, num2 = 60;
let commonDivisors = [];
for (let i =1; i <= ((num1 > num2) ? num2 : num1); i++){
    if (num1 % i == 0 && num2 % i == 0) {
        commonDivisors.push(i);
    }
}
console.log(`${num1},${num2}의 공약수: ${commonDivisors}`); //24,60의 공약수: 1,2,3,4,6,12

