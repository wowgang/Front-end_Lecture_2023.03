let arr = [52, true, '감', 'banana',250];
console.log(arr); //[ 52, true, '감', 'banana', 250 ] 
console.log(typeof arr); //object
console.log(arr.length); // 5   5개의 elemet가 있음 1부터 시작이고
console.log(arr[0], arr[2] ,arr[arr.length-1]) //52 감 250  인덱스 번호는 0번부터 시작
// arr.concat()  매소드에는 괄호가 있음 
// arr.length 속성  attribute = property는 괄호없음 

let i = 0; //index 의미로 i를 주로 사용함 전역변수global
while (i < arr.length) {
    console.log(`index=${i}, value=${arr[i]}`);
    i++; // while 조건을 변화시키는 값이 무조건 나와야 함
}
/* length는 1~5(5개) , index는 0~4(5개) 
index=0, value=52
index=1, value=true
index=2, value=감
index=3, value=banana
index=4, value=250 */

for (let i=0; i < arr.length; i++) {
    console.log(`index=${i}, value=${arr[i]}`);
}
/* 
전역변수
로컬변수 {블록안에서만}  //for문에서 i
 */

// Enhanced for-loop
console.log('Enhanced for-loop');
for (let item of arr)
    console.log(item);
/*  Enhanced for-loop : element만 나옴
52
true
감
banana
250 */
