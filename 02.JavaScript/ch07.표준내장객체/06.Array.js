/* str = 'hello world';
str.substring(0,5); //hello (인데스0부터4까지표시) str값이 바뀌지 않았으므로 비파괴적이라고한다.
console.log(str) //hello world
 반대로 파괴적인 메소드는 자기 자신을 변화시킨다.*파괴적 메소드 */

 /* #파괴적 처리 and 비파괴적 처리
처리 후에
-원본이 변경되었다 -> 파괴적 처리
-원본이 변경되지 않았다 -> 비파괴적 처리 */

//  배열의 메서드
//  배열 뒤에 요소 추가하기 push(요소)
//  배열 중간에 요소 추가하기 splice(인덱스, 0, 요소)
//  - splice 접착이라는 뜻  a.splice(1, 0, '추가')
//  인덱스로 배열의 요소 제거하기 splice(인덱스,1)
//  배열 내부에서 값의 위치 찾기 indexOf(요소)
//  값으로 배열의 요소 제거하기 indexOf() + splice() 활용
/* const index = a.indexOf('하세요')  //'하세요'의 인덱스번호는 4
console.log(index)
a.splice(index, 1) //'하세요'=인덱스[4]를 지운것
console.log(a) // [ '안녕', 2, 'hello', 55 ] */


// Array
// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];
let cars = new Array ('Audi', 'Benz','BMW','Volvo');
console.log(cars)  // [ 'Audi', 'Benz', 'BMW', 'Volvo' ]


//배열 속성
console.log(fruits.length, cars.length); // 3 4 

//메소드
//1.concat
let newFruits = fruits.concat('orange', 'mango');  //concat은 비파괴적 새로운 배열만들기
console.log(fruits); //[ 'apple', 'banana', 'cherry' ]
console.log(newFruits); //[ 'apple', 'banana', 'cherry', 'orange', 'mango' ]



//2.join
console.log(`내가 갖고 싶은 차는 ${cars} 입니다.`);
 // 내가 갖고 싶은 차는 Audi,Benz,BMW,Volvo 입니다.
//배열을 다 말해줌
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`); 
// join을 사용해서 공백을 주었음. array를 하나의 string으로 쫙 펼쳐준다.
// 내가 갖고 싶은 차는 Audi, Benz, BMW, Volvo 입니다.



// 3.pop()*  *파괴적 메소드
console.log(cars.pop()); //Volvo
console.log(cars); //[ 'Audi', 'Benz', 'BMW' ]

// 4.push()*
cars.push('Hyundai');  //push반대말은 full
console.log(cars); // [ 'Audi', 'Benz', 'BMW', 'Hyundai' ]


// 5. reverse()*
cars.reverse();
console.log(cars); //[ 'Hyundai', 'BMW', 'Benz', 'Audi' ]

// 6.slice()  -시작 인덱스는 포함(이상), 마지막 인덱스는 포함하지 않음(미만)
let germanyCars = cars.slice(1);  // 인덱스1부터 끝까지
console.log(germanyCars);  //[ 'BMW', 'Benz', 'Audi' ]
console.log(cars.slice(1,3)); // 1이상3미만이라 인덱스1부터2까지출력  [ 'BMW', 'Benz' ]


// 7.sort()* 오름차순 정렬
cars.sort();  //slice는 자기 파괴가 아니라 recerse한걸로 하는것임
console.log(cars);  //[ 'Audi', 'BMW', 'Benz', 'Hyundai' ]

let numbers = [34,56,8,29,94,46,75];
// 오름차순 (ascending order)
numbers.sort(); //맨앞숫자만 고려해서 정렬을 해서 이상하게 나온다 빈칸이 있는것처럼
console.log(numbers);
/* [
    29, 34, 46, 56,
    75,  8, 94
  ] */

  // 오름차순 (ascending order)
numbers.sort(function(a,b) {  //a첫번째 b두번째 =a가크면 오름차순,b가크면 내림차순
   return a- b; //+면 a가 큰면 b가 큰것으로 내림차순  콜백
});
console.log(numbers);
/* [
    8, 29, 34, 46,
   56, 75, 94
 ] */

 //내림차순 (descending order)
 numbers.sort(function(a,b) {
    return b-a;
 }) 
 console.log(numbers);
/*  [
    94, 75, 56, 46,
    34, 29,  8
  ] */

// 객체의 배열
let fruitArray = [
    {name: 'apple', price: 1000},
    {name: 'orange', price: 2000},
    {name: 'cherry', price: 3000}
];
//이름의 오름차순
fruitArray.sort(function(a,b){
    if (a.name < b.name)
        return-1;
    if (a.name >b.name)
        return 1;
    return 0;  //여기과 왜 0인지 찾아보기
});
console.log(fruitArray)
/* [
    { name: 'apple', price: 1000 },
    { name: 'cherry', price: 3000 },
    { name: 'orange', price: 2000 }
  ] */

// 가격의 내림차순
fruitArray.sort(function(a,b){
    return b.price - a.price;
})
console.log(fruitArray)
/* [
    { name: 'cherry', price: 3000 },
    { name: 'orange', price: 2000 },
    { name: 'apple', price: 1000 }
  ] */

//   8. splice()*
let someFruits = fruits.splice(1,3);
console.log(fruits); // [ 'apple' ]
console.log(someFruits); // [ 'banana', 'cherry' ]

// isPalindrome()을 Array method를 이용하여 만들기
function isPalindrome(str) {
    let reverseStr = str.split('').reverse().join('');
    return str == reverseStr
} 
console.log(isPalindrome('우영우'));  //true
console.log(isPalindrome('hello'));  //false