// 객체(Object)

// 배열(Array)
let fruits = ['딸기', '사과', '수박', '참외'];
console.log(typeof fruits); //object

//object형식으로 작성 key -value 쌍으로 되어있음 (key값의 인덱스가 0부터 시작)
let fruitObj = {0:'딸기',1:'사과',2: '수박',3: '참외'} //키(인덱스):밸류
console.log(fruits[0], fruitObj[1]) //딸기 사과

//객체 (Object, Python dictionary, Java Map)
let personArray = ['제임스', 28, '남자' , 175, '프로그래머', 30.0];
let personInfo = {
    name:'제임스', age: 28, gender: '남자' , 
    height: 175, job:'프로그래머', bmi: 30.0
} //js는 key가 string인 경우 ''따옴표 생략 가능 하지만 value에는 반드시 붙여줘야함
console.log(personArray); //[ '제임스', 28, '남자', 175, '프로그래머', 30 ]
console.log(personInfo);
/* {
    name: '제임스',
    age: 28,
    gender: '남자',
    height: 175,
    job: '프로그래머',
    bmi: 30
  } */

  //객체에 대한 접근
  console.log(personInfo['name']); //제임스 이런식으로는 사용하지 않음
  console.log(personInfo.name); //제임스 이렇게 써도 결과가 같음 대부분 이렇게 사용

  let key = 'age'; 
  console.log(personInfo[key]); //28 키값을 어떤 변수로 받을때는 이런식으로 사용한다.