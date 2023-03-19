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
/* 
*
**
***
****
***** 
*/
for (let i = 1; i <= 5; i++) {
    let star = '';
    for (let k = 0; k < i; k++) {  //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}

for (let z = 0; z < 5; z++) {
    console.log('*'.repeat(z+1))
}

//4사분면
/* 
*****
****
***
**
* 
*/
for (let i = 5; i >= 1; i--) {
    let star = '';
    for (let k = 0; k < i; k++) { //i개 만큼 별 만들기
        star += '*';
    }
    console.log(star);
}

for (let i =6; i>0; i--) {
    console.log('*'.repeat(i-1))
}

for (let i =5; i>=1; i=i-1) {
    console.log('*'.repeat(i))
}

for (let i = 0; i<5; i++) {
    console.log('*'.repeat(5-i))
}

// 먼저 내가 필요한 나타내고싶은 걸 써보고 규칙을 찾아낸다음 식을 만들어보기
/*
i=0인데 *이 5개부터 찍혀야함.
i는 0,1,2,3,4 
*은 5,4,3,2,1
둘의 규칙은 i와*의 합이 5이다.
i+*=5 
*=5-i
*/ 

//2사분면
/* 
    *
   **
  ***
 ****
***** 
*/
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

//3사분면
/* 
*****
 ****
  ***
   **
    * 
*/
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


