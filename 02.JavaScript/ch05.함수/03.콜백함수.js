//Call back 함수
function callFiveTimes(callback) {  //callback anonymous랑 같은것 
    for (let i = 0; i<5; i++)
        callback();
}
//익명 함수 선언
const cb = function() {
    console.log('함수가 호출되었음');
}
callFiveTimes(cb)
/* cb가 5번 호출됨 callFiveTimes함수안에 익명함수 cb가 전달되었기 때문에
함수가 호출되었음
함수가 호출되었음
함수가 호출되었음
함수가 호출되었음
함수가 호출되었음 */

callFiveTimes(function () {
    console.log('익명 함수가 호출되었음');  //cb자리에 있는걸 function으로 대체해준것임
});
/* 
익명 함수가 호출되었음
익명 함수가 호출되었음
익명 함수가 호출되었음
익명 함수가 호출되었음
익명 함수가 호출되었음 */

