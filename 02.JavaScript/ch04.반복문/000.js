//indexOf와 splice사용해서 '라'를 모두 제거 
//모두라고 적혀있으면 반복문을 쓰라는 
const arr1 = ['가','라','다','라','마','라'];
arr1.indexOf('라'); 
// console.log(a) //1
arr1.splice(1,1)
console.log(arr1) // [ '가', '다', '라', '마', '라' ]
arr1.indexOf('라');
arr1.splice(2,1)
console.log(arr1)  // [ '가', '다', '마', '라' ]
arr1.indexOf('라');
arr1.splice(3,1)
console.log(arr1)  // [ '가', '다', '마' ]

/* indexOf가 -1('라'가없어서)이 나올때 까지 해야한다.
조건이 핵심
내가 반복하고싶은것은 true
반복하고 싶지 않은것은 false */
const arr = ['가','라','다','라','마','라'];
while (arr.indexOf('라') > -1 ) {
    arr.splice(arr.indexOf('라'),1) //위에 보면 arr1.splice(1,1)규칙 찾아보면 앞에1은 바뀌고 뒤에1 변함이 없다.뒤에 1은 지우는개수이다.
}
console.log(arr) //[ '가', '다', '마' ]

// 위 코드 중복 제거
const arr2 = ['가','라','다','라','마','라'];
let index = arr2.indexOf('라');
while (index > -1) {
    arr.splice(index,1);
    index = arr2.indexOf('라'); // 라'의 첫번째 인덱스 즉, 반환 값이 1이다. 반복문 바깥에 위치하기 때문에 재선언을 해주지 않는 이상 index = 1 이다. 이러한 이유로 반복문이 돌아가는 동안 새로운 값을 매번 할당 받을 수 있도록 index = arr.indexOf('라'); 를 선언
 }

/* 
const arr = ['가','라','다','라','마','라'];
for (arr.indexOf('라'))
 */