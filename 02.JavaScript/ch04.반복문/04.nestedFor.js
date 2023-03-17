//row 행 = i
//column 열 =  k // j로 대부분 표현하나 우리는 k
//for중첩은 처음 for진행하고 그다음for진행 순차적으로 진행

//사각형 그리기
for (let i = 0; i < 5; i++) {
    let star = '';
    for (let k = 0; k < 5; k++) {
        star += '*';
    }
    console.log(star);
}
/* 
*****
*****
*****
*****
***** 
*/


//다이아몬드 그리기(1사분면)
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < i; k++) {  //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}
/* 
*
**
***
****
***** 
*/

//4사분면
for (let i = 5; i >= 1; i--) {
    let star = '';
    for (let k = 0; k < i; k++) { //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}
/* 
*****
****
***
**
* 
*/

//2사분면
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k =0; k < 5-i; k++) { 
        star += ' ';            //5-i개 만큼 공백 만들기
    }
    for (let k = 0; k < i; k++) { //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}
/* 
    *
   **
  ***
 ****
***** 
*/

//3사분면
for (let i = 5; i >= 1; i--) {
    let star = '';
    for (let k = 0; k < 5-i; k++) {
        star += ' ';    //5-i개 만큼 공백 만들기
    }
    for (let k = 0; k < i; k++) { //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}
/* 
*****
 ****
  ***
   **
    * 
*/


