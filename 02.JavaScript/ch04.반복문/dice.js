// 1에서 6 사이의 무작위 수 생성
// var diceRoll = Math.floor(Math.random() * 6) + 1;
/* 위 코드에서 Math.floor() 함수는 소수점 이하를 제거하여 정수값을 얻는 함수이며, 
Math.random() 함수는 0 이상 1 미만의 무작위 수를 생성합니다.
따라서 Math.random() * 6은 0 이상 6 미만의 무작위 수를 생성하고, 
이를 Math.floor() 함수를 이용하여 0에서 5 사이의 정수값으로 변환합니다. 
마지막으로 1을 더하여 1에서 6 사이의 정수값을 얻습니다. */

// 결과 출력
// console.log("You rolled a " + diceRoll);


let dice1 = Math.floor(Math.random() * 6) + 1;
let dice2 = Math.floor(Math.random() * 6) + 1;
let dice3 = Math.floor(Math.random() * 6) + 1;

if (dice1 == dice2 && dice1 == dice3) {
    res1 = 10000+ dice1 * 1000;     //세개 다 같을때
    console.log(`1번주사위 : ${dice1} , 2번주사위 : ${dice2}, 3번주사위: ${dice3} 상금: ${res1}} `);
} else if (dice1 == dice2 || dice1 == dice3) {
    res2 = 1000+ dice1 *100;        //셋중 둘만 같을때
    console.log(`1번주사위 : ${dice1} , 2번주사위 : ${dice2}, 3번주사위: ${dice3} 상금: ${res2}} `);
} else if (dice1 == dice2 || dice2 == dice3) {
    res3 = 1000+ dice2 *100;        //셋중 둘만 같을때
    console.log(`1번주사위 : ${dice1} , 2번주사위 : ${dice2}, 3번주사위: ${dice3} 상금: ${res3}} `);
} else {
    res4 = Math.max(dice1, dice2, dice3) * 100; // 모두 다를때 
    console.log(`1번주사위 : ${dice1} , 2번주사위 : ${dice2}, 3번주사위: ${dice3} 상금: ${res4}} `);
} 


