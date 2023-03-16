// if -else
let today = new Date();
console.log(today);

console.log(today.getHours()); //현재 표준시도 나옴

let hour = today.getHours();
console.log(hour);

if (hour < 12)
    console.log(`오전 ${hour}시 입니다.`)
else
    console.log(`오후 ${hour - 12} 시 입니다.`)



    