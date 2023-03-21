
/* // let y = 2021
let u = 2021 % 12 //5
const a = '가,나,다,라,마,바,사,아,자,차,타,카'.split(',')
console.log(`${a[u]}`) */

const a = ['안녕',2,'hello',55,'하세요']
const index = a.indexOf('하세요')  //'하세요'의 인덱스번호는 4
console.log(index)
a.splice(index, 1) //'하세요'=인덱스[4]를 지운것
console.log(a) // [ '안녕', 2, 'hello', 55 ]
