// 1~10 홀수의 합
let sum1 = 0;
for (let i = 1; i <=10; i++) {  //continue 면여기로 돌아와
    if (i % 2 == 0)
        continue;  //출력안하고 루프로 돌아감.초기식으로 돌아감
    sum1 += i;
    console.log(`index=${i}, sum=${sum1}`);
}
/* 
index=1, sum=1
index=3, sum=4
index=5, sum=9
index=7, sum=16
index=9, sum=25 */


//배열의 값이 홀수인 원소의 합
let numbers = [3, 57, 25, 48, 83, 79];
let oddSum = 0;
for (let number of numbers) {
/*     if (number % 2 == 0)
         continue;
        oddSum += number; */

        if (number % 2 ==1)  // 2로 나눈 나머지가 1인값은 홀수
            oddSum += number;
}
console.log(oddSum) // 247