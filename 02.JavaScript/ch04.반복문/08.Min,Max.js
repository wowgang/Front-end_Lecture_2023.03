//배열에서 최대 최소값 찾기
let numbers = [13, 57, 25, 48, 7, 83, 79, 61, 22, 39];

//최대값 찾기
let maxVal = 0; //가장 작은값을 줌
for (let i = 0; i < numbers.length; i++) {
    if (maxVal < numbers[i])  // maxVal 0 <13 
        maxVal = numbers[i];  // 13 =13
}
console.log(maxVal); //83

//최소값 찾기
let minVal = 1000;
for (let number of numbers) {
    if (minVal > number)
        minVal = number;
}
console.log(minVal) //7

//동시에 찾기 
maxVal = numbers[0], minVal = numbers[0];  //첫번째 엘리먼트 값으로 루프를 돌리면 실수줄일수 있음
for (let number of numbers) {
    if (maxVal < number)
        maxVal = number;
    if (minVal > number)
        minVal = number;
}
console.log(minVal, maxVal) 


//백준도장 2739번 구구단
//N을 입력받은 뒤, 구구단 N단을 출력하는 프로그램을 작성하시오. 출력 형식에 맞춰서 출력하면 된다.
//첫째 줄에 N이 주어진다. N은 1보다 크거나 같고, 9보다 작거나 같다. 1<= n <=9 
//출력형식과 같게 N*1부터 N*9까지 출력한다.


for (let n =2; n<=9; n++ ){
    let star = '';
    for (let k=1; k<=9; k++){
       
        console.log(`${n} * ${k} = ${k*n}`);
    } 
    console.log();
} 

/* input
let num =2;
for (let i =1; i<=9; i ++){
    console.log(`${num} * ${i} = ${num*i}`)
} */

//백준도장 2884번 알람시계
// (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 놓은 알람 시간 H시 M분을 의미한다.



let arl;
if (minute >= 45){
    setMinute -= 45;
} else if (minute < 45) {
    hour -= 1;
    setMinute = minute +60 -45;
    }
    

console.log(`현재 상근이가 설정해 놓은 알람시간은 ${h}시 ${m}분 이다. `)
    

