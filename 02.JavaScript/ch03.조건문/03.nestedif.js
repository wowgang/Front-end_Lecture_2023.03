// 중첩 조건문 (Nested If)
// 윤년 : 년이 4로 나누어 떨어지고 100으로 떨어지지 않아야 윤년이다. 또는 400으로 나누어 떨어져야 윤년이다.
// 윤년 (year % 4 = 0 && yesr % 100 !=0 ) && year % 400 == 0

/* let year = 2024;

if (year % 4 == 0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
    } else  {
        console.log(`${year}년은 윤년 입니다.`);
    }
} else { 
        console.log(`${year}년은 윤년 입니다.`);
    }
} else {
    console.log(`${year}년은 평년 입니다.`);
}
 */
let year = 2023;
if (year % 4 == 0 && yesr % 100 !=0 || yesr % 400 == 0) {
    console.log(`${year}년은 윤년 입니다.`);
} else {
    console.log(`${year}년은 평년 입니다.`);
}

