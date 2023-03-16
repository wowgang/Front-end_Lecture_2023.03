//if -else if -else
let score = 73;
let grade;

if (score >= 90)
    grade = 'A';
else if (score >= 80)
    grade = 'B';
else if (score >= 70)
    grade = 'C';
else if (score >= 60)
    grade = 'D';
else 
    grade = 'F';

console.log(`성적: ${score}, 학점: ${grade}`);
//조건 붙이는 순서 중요. 작은것부터 점점 커시는 순서로 하기 조심하기