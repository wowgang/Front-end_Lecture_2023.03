// 1. 인수와 반환값이 있는 함수
function sum(min, max) {
    let result = 0;
    for (let i = min; i <= max; i++)
    result +=i;
    return result;
}
console.log(sum(1,100));  //5050

//2.인수없이 반환값만 있는 함수
function dice() {
    return parseInt(Math.ceil(Math.random() *6)) ; //Math.ceil 올림함수
}
console.log(dice(),dice(),dice());

/* Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수이며,
Math.floor 는 소수값이 존재할 때 소수값을 버리는 역활을 하는 함수이며,
Math.round 는 소수값에 따라 올리거나 버리는 역활을 하는 반올림 함수입니다. */

// 3.인수는 있고 반환값이 없는 함수
function print(a) {
    console.log(a);

}
print('No return value function'); // No return value function

//4.인수도 없고 반환값도 없는 함수
let globalVar = 0;  //전역변수
function increment() {
    globalVar++;
}
increment();
console.log(globalVar); //1

//매개변수를 입력하지 않고 호출하는 경우

/* function printFruit(name, count) {
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('사과',20); //사과 과일이 20개 있습니다.
printFruit('딸기'); //딸기 과일이 undefined개 있습니다. */

function printFruit(name, count) {
    /* if (typeof(count)== 'indefined') 
        count = 0; 아래 3항은 조건문을 줄인것*/
    count = count ? count :0;  //매개변수를 입력하지 않았을 때 초기값을 주는 방법 /count 1234~ 가 나오면 참 0은 bool로 false
    console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('사과',20); //사과 과일이 20개 있습니다.
printFruit('딸기');  //딸기 과일이 0개 있습니다.


//위 코드 이렇게도 표현 가능
function printFruit2(name, count = 0 ) {
console.log(`${name} 과일이 ${count}개 있습니다.`);
}
printFruit('귤');
