// 1 에서 1000까지 숫자가 있다.
// 0은 몇번, 1은 몇번, ..., 9는 몇번 사용되는가?
function strCount(str, dst) {           // str 에서 dst 가 몇번 사용되는가
    return str.split(dst).length - 1;
}

let numStr = '';
for (let i = 1; i <= 1000; i++)
    numStr += i;                // 12345678910111213....9991000
console.log(numStr.length);
for (let num = 0; num <= 9; num++) {
    //let count = numStr.split(String(num)).length - 1;
    let count = strCount(numStr, String(num));
    console.log(`${num} 은/는 ${count} 번 사용됨.`);
}