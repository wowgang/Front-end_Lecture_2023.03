// 타이머 내장 함수

/* setTimeout(function() {  //setTimeout(function() {}, 3000) 중괄호 안에 함수를 넣어준다.
    console.log('3초 경과');
}, 3000) ; //함수(익명함수),시간 1000=1초  /3초후에 콘솔에 출력됨

const threeSenconds = function() {  ///위 코드이렇게도 줄 수 있음.
    console.log('3초 경과');
}
setTimeout(threeSenconds,3000) //3초후에 콘솔에 출력됨 */


const si = setInterval(function() {
    console.log(new Date);
},1000) ; // 

setTimeout(function() {
    clearInterval(si);
}, 5000); 
//비동기 함수라 setTimeout이 setInterval 함수보다 빠르게 돌아가서 4개 나옴 console.log가 딜레어걸리게함

/*1초마다 하나씩 출력됨 
2023-03-20T02:03:04.052Z
2023-03-20T02:03:05.053Z
2023-03-20T02:03:06.067Z
2023-03-20T02:03:07.081Z */

/* 비동기(Asynchronous) 함수란? 자바스크립트는 싱글스레드이기 때문에 한 번에 하나의 작업만 수행할 수 있다. 이를 해결하기 위해 비동기가 생겼다. 비동기란 특정 코드의 처리가 끝나기 전에 다음 코드를 실행할 수 있는 것을 뜻한다. */
/* 비동기 함수란?
비동기 함수(Asynchronous Function)는 일반적인 동기 함수와는 달리, 함수를 호출하고 결과가 반환될 때까지 기다리지 않고 다음 코드 블록으로 넘어가는 함수입니다. 비동기 함수는 일반적으로 비동기적으로 동작하는 코드와 함께 사용되며, 이러한 코드는 특정 작업이 완료될 때까지 기다릴 필요 없이 다른 코드를 실행할 수 있습니다. */