// 생일 - 오늘 현재 만나이 계산
const bYear = 1994, bMonth = 3 , bDay = 20;
const today = new Date();
    console.log(today) // 2023-03-16T07:19:27.898Z
const tYear = today.getFullYear();
    console.log(tYear) // 2023
const tMonth = today.getMonth() + 1; //달은 하나 적게나옴
    console.log(tMonth) //3
const tDay = today.getDate();
console.log(tYear, tMonth, tDay);


let age;
if (tMonth > bMonth)
    age = tYear-bYear;
else if (tMonth < bMonth)
    age = tYear-bYear - 1;
else {
    if (tDay >= bDay) {
        age = tYear - bYear;
    } else
        age =tYear-bYear - 1;
}

console.log(age);