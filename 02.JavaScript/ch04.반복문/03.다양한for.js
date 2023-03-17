//역 for 반복문
let sum = 0;
for (let i = 10; i > 0; i--) {
    sum += i;
    console.log(`index=${i}, sum=${sum}`);
}

/* 
index=10, value=10
index=9, value=19
index=8, value=27
index=7, value=34
index=6, value=40
index=5, value=45
index=4, value=49
index=3, value=52
index=2, value=54
index=1, value=55 */

// 1에서 10까지 홀수의 합
let oddSum = 0;
for (let i = 1; i <= 10; i += 2) {
    oddSum += i;
    console.log(`index=${i}, sum=${oddSum}`)
}
/* 
index1, value=1
index3, value=4
index5, value=9
index7, value=16
index9, value=25
 */

//48에서 10까지 3의 배수의 합
let zsum = 0;
for (let i =48; i>= 10; i-=3 ) {
    zsum += i;
    console.log(`index= ${i}, sum=${zsum}`);
}
/* 
index= 48, sum=48
index= 45, sum=93
index= 42, sum=135
index= 39, sum=174
index= 36, sum=210
index= 33, sum=243
index= 30, sum=273
index= 27, sum=300
index= 24, sum=324
index= 21, sum=345
index= 18, sum=363
index= 15, sum=378
index= 12, sum=390 */




