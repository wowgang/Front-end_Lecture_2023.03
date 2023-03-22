let output=''
for (let i =0; i<9; i++){
    for(let j=0; j<i+1; j++){
    output +='*'
}output +='\n'
}
console.log(output)

/* 
*
**
***
****
*****
******
*******
********
********* 
*/


let output1=''
for (let i =0; i<9; i++){
    for(let j=0; j<(2*i+1); j++){
    output1 +='*'
}output1 +='\n'
}
console.log(output1) 

/* 
*
***
*****
*******
*********
***********
*************
***************
***************** 
*/



let output2=''
for (let i =0; i<9; i+=2){
    for(let j=0; j<i+1; j++){
    output2 +='*'
}output2 +='\n'  //for문이 끝나면 개행
}
console.log(output2) 

/* 
*
***
*****
*******
********* 
*/


let output3=''
for (let i =0; i<9; i++){
    output3 += ' '  //공백추가
    for(let j=0; j<(2*i+1); j++){
    output3 +='*'
}output3 +='\n'
}
console.log(output3) 

/* 
 *
 ***
 *****
 *******
 *********
 ***********
 *************
 ***************
 *****************
  */

 let output4=''
for (let i =0; i<9; i++){
    for (let k =0; k<i+1; k++){  // k 추가 
        output4 += ' '
    }
    for(let j=0; j<(2*i+1); j++){
    output4 += '*'
    }
output4 +='\n'
}
console.log(output4) 


let today = new Date();
console.log(today.toDateString()); 