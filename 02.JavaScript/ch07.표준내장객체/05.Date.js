//Date는 class에 해당 / "Date" 자체가 약속된 기호
//안에 메소드 형성 가능
//**JS는 다른 언어들에 비해 날짜 표기가 불편- 아래의 설정들로 수정가능 */

let today = new Date();
console.log(today);                 //2023-03-21T00:16:40.580Z
console.log(today.toDateString());  //Tue Mar 21 2023
//  ----> Local의 timezone 반영하기
console.log(today.toLocaleString());    //2023. 3. 21. 오전 9:19:01


// 어제 진도(03.String 파일)에서 배운 내용 (YYY-MM-DD hh:mm:ss)
//결과 :   2023-0320 16:11:51
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime(date) {             ////  괄호 안에 () date.를 추가했음 / 아래 이하 now를 date로 바꿨음 0321
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` + 
        `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
console.log(myDatetime(today));         //괄호 안에 today 추가


//2. *(별로 안쓰임)* Unix time 기준 (1970.1.1이후 ms단위)
let UnixDay = new Date(1.6794e12);        //e : 에코
console.log(UnixDay);   // 2023-03-21T12:00:00.000Z

// 3. 문자열 기반
let strDate = new Date('2023-03-21 09:25:00');
console.log(strDate);

//4. 날짜/시간 요소 기반
let elementDay = new Date(2023,2,21,9,30);  //month-1을 해주기, 생략한 단위는 0으로 출력
console.log(elementDay);  //초,milli second는 생략 가능 (시간 단위를 생략하면 0으로 대체됨)

/* 
 시간 연산
*/
// 더하기, 빼기
today.setDate(today.getDate() + 100);
//today의 속성값(오늘 날짜를) get메소드의 명령으로 처리하여 바꿈
console.log(myDatetime(today));
today.setDate(today.getDate() - 100);
console.log(myDatetime(today));

//오늘 : 1년 2개월 3일 후    -----> 위의 년월일 설정하는 코드와 연결됨- 위의 값 변경해서 연동한 상태
let date = new Date();
date.setFullYear(date.getFullYear() + 1); //1년 후로 세팅
date.setMonth(date.getMonth() + 2);         // 2개월 후
date.setDate(date.getDate() + 3);           //3일 후
console.log(myDatetime(date));

// 시간 간격
let christmas = new Date(2023, 11, 25);
let diffMs = christmas.getTime() - today.getTime();
let diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

// 수능일 : 2023-11-16
diffMs = new Date(2023, 10, 16).getTime() - today.getTime();
diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

// 어제 날짜
diffMs = today.getTime() - new Date(2023, 2, 20).getTime();
diffDay = Math.floor(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);