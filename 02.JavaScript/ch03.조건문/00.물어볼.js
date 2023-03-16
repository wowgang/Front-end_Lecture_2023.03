//우선순위
//남자이고, 이름이 Mike 이거나 성인이면 통과
const gender = 'F';
const name = 'Jane';
const isAdult = true;

if (gender === 'M' && name === 'Mike' || isAdult) {
    console.log('통과')
} else {
    console.log('돌아가.')
}

// >> 통과가 나오는데 왜 나오는지 모르겠음
//위 코드는  (gender === 'M' && name) === 'Mike' || isAdult 와 같다고하는데 
//남자이고, 이름이 Mike 이거나 성인이면 통과
//위의 말처럼 코드를 진행하려면 gender === 'M' && (name === 'Mike' || isAdult) >> 돌아가

