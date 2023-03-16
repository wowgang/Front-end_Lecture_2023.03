// switch - multi select
let score = 84;
let scoreDigit = parseInt(score / 10); //10으로 나눈 몫  parseInt정수값
let grade;

switch(scoreDigit) {
    case 10:
    case 9:
        grade = "A"; break;  //이런 라인으로 작성하기도 함. 한문장으로 쓸경우 한문장 끝날때 마다 세미콜론 꼭 붙여주기
    case 8:
        grade = "B";
        break;
    case 7:
        grade = "C";
        break;
    case 6:
        grade = "D";
        break;
    default:
        grade = "F";
}
console.log(`성적: ${score}, 학점: ${grade}`);
//switch 다음 break 넣어주지 않으면 default값만 나온다...
/*
let score = 54;
let grade = F; 
일경우 

default:
        grade = "F"; 생략 가능하나 일반적으로 사용하지않음.. 의미는 알고있기
*/ 
