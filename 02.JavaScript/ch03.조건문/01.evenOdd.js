//홀수/짝수
let num = 10;

if (num % 2 == 1) {
    console.log('홀수입니다.')
}
if (num % 2 == 0) {
    console.log('짝수입니다.')
}

// Math.random() 0에서1까지 아무 숫자
// Math.random() *100  0에서100까지 아무 숫자
// Math.ceil() 올림  천장 3.5->4
// Math.floor() 내림 바닥 3.5->3

// let한번만 사용 한번 더 사용하면 오류남
num = Math.ceil(Math.random() * 100); // 1~100사이의 정수값 

if (num % 2 == 1) {
    console.log(`${num} 은/는 홀수입니다.`);
}
if (num % 2 == 0) {
    console.log(`${num} 은/는 짝수입니다.`)
}
