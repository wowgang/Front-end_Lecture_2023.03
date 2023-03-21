// String 객체

let stringFromLiteral = '안녕하세요?';
let stringFromConstructor = new String('안녕하세요?');

//속성(attribute,property)
console.log(stringFromLiteral.length); //6

//메소드(method)
let str = '안녕하세요?';
console.log(str[0],str.charAt(0)); // 안 안 -둘이 동일함
console.log(str.concat('여러분!')); //  '안녕하세요?' + '여러분!' /< 안녕하세요?여러분!
console.log(str.indexOf('하')); 
// 내가 가지고있는 string중에  '하'라는 글자를 포함하는가? 포함한다면 '하'라는 글자는 어디에 있는가? /< 2 (인데스번호) 0이하면 포함하지않는것

// 디지털 시계, 00:00 ~ 23:59
//하루동안 3이 표시되는 시간은 몇초 인가?
/* let strHour = new String('');
let strMinute = new String('');
for (h=0; h<24; h++) {
    strHour.indexOf('3')
    for(m=0; m<59; m++){
        strMinute.indexOf('3')
    }console.log(`${strHour}시간 `${strHour}분`)
} */

let totalSeconds = 0;
for (let hour = 0; hour <24; hour++) {  //23시까지 24시는 0시
    for(let minute = 0; minute <60; minute++) { //59분까지 60분은 0분
        let display = hour + ':' + minute;
    if (display.indexOf('3') >=0) //display에 3이 있으면 0이상인 값을 반환 /없으면 -1이니까
    totalSeconds +=60;
 }
}console.log(totalSeconds); //29700


console.log('pineapple'.lastIndexOf('p')); //p를 거꾸로 찾아줘라6

//정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brouw fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를ㅋㅋ';

let newStr = sample.replace('A', 'a'); //이건 정규표현식아님
console.log(newStr);  //ㅠㅠa quick brouw fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를ㅋㅋ

newStr = sample.replace(/[A-Z]/,'대'); //한개만 바꿈 
console.log(newStr); //ㅠㅠ대 quick brouw fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를ㅋㅋ
newStr = sample.replace(/[A-Z]/g,'대'); //global하게 모두 바꿈 
console.log(newStr); //ㅠㅠ대 quick brouw fox 갈색의 재빠른 여우가 대umps over the lazy dog. 게으른 개를ㅋㅋ


//한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g,''); //구간 설정 잘해야함 'ㄱ-ㅎ'에서 한칸띄고 지우고 'ㅏ'를 입력해야함. 공백(' ')이 아닌 모든 문자를 매칭
console.log(newStr); //A quick brouw fox    Jumps over the lazy dog.
//한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g,'');  //^은 not의 의미이고 '힣' 뒤에 한칸 띄는것은 공백을 의미 
console.log(newStr); //ㅠㅠ    갈색의 재빠른 여우가      게으른 개를ㅋㅋ

//문자열을 분리하여 배열을 반환
let fruitString = '사과,배,감,포도';
let fruitArray = fruitString.split(','); //콤마로 구분해서
console.log(fruitArray) //[ '사과', '배', '감', '포도' ]

//문자열 일부분
const today = new Date().toISOString();
console.log(today) //2023-03-20T06:51:55.544Z
console.log(today.substring(0,10));     //날짜만 뽑으려면 인덱스0부터9까지라 2023-03-20
console.log(today.substring(0,8+10));     // 2023-03-20 10글자 필요하니까 +10
console.log(today.substring(11,19));    //시간 추출: 06:51:55
console.log(today.substring(11,11+8));    // 8글자 필요하니까 +8

//deprecated 현재 버전에서는 사용가능하나 곧 없어질기능은 줄이 그어져있다.(자동완성에)
console.log(new Date().getHours());

// YYYY-MM-DD hh:mm:ss 형식으로 만들어 주는 함수
function twoDigit(num) {
    return (num < 10) ? '0' + num : String(num);
}
function myDatetime() {
    let now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} ` +
    `${now.getHours()}-${twoDigit(now.getMinutes())}-${twoDigit(now.getSeconds())}`

}
let now = myDatetime();
console.log(now); // 2023-03-20 16-10-50
console.log(now.substring(2))  //인덱스2부터 끝까지(end생략하면) 23-03-20 16-11-55 두번째 인수를 생략하면 맨 끝까지

console.log('  hello  '.trim()); //hello  양 끝의 공백을 없애줌

console.log('33'.split('3').length); // ['','',''] 3을기준으로 자르니까 다 빈 스트링임.
console.log('13131'.split('3').length); // ['1','1','1'] 3을기준으로 자르니까 
console.log('1,1,1'.split(',').length); //  3을기준으로 자르니까 

//1에서 1000까지 숫자가 있다.
//0은 몇번, 1은 몇번, ...,9는 몇번 사용되는가?
/* str = '123456789101112'
str = 1의 개수
console.log(str.split('1').length-1)
 */
/* let sum = 0;
let howmany = 0
let strObj = new String(str);

for (str = 1; str <=1000; str++) {
    strObj = new String(str);

   for(a=0; a<10; a++) {
    howmany = str.split(a).length-1;
    sum +=d
    }
} console.log(str,a,d)


let fruits = ['사과', '배', '귤', '딸기'];
let fruitStr = ''; //초기값 empty string  빈 스트링
for (let fruit of fruits)
    fruitStr += fruit;
console.log(fruitStr); */

function strCount(str, dst) {  //str 에서 dst가 몇번 사용되는가
    return str.split(dst).length -1;
    
  }

let numStr = '';
for (i = 1; i <=1000; i++) {
    numStr += i;  ///'123456789101112...'   
} for (let num = 0; num <=9; num++) {
    // let count = numStr.split(String(num)).length -1 ;
    let count = strCount여기 다시시시시시
    console.log(`${num}은/는 ${count}번 사용됨.`)
  }




  //isPalindrome함수 만들기 (기러기,토마토)
/* function isPalindrome() {
    index[0] == index[length];

} */

다시해보기
function isPalindrome() {
    let reverseStr = '';
    for (let i = str.length -1; i >=0; i--)
        reverseStr += str[i];
    return str == reverseStr; 
}
console.log(isPalindrome('우영우'));

// C:\\Program Files\\nodejs\\node.exe에서 파일명만 출력하세요.
다시해보기
/* console.log() 
const to = new Location();
console.log(today) //2023-03-20T06:51:55.544Z
console.log(today.substring(0,10));
const today = new Date().toISOString();
console.log(today) //2023-03-20T06:51:55.544Z
console.log(today.substring(0,10)); */
const path = 'C:\\Program Files\\nodejs\\node.exe'
let index = path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);

let pathArray = path.split('\\');
console.log(pathArray[pathArray.length -1]);