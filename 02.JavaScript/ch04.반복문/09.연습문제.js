
for (let n =2; n<=9; n++ ){
    let star = '';
    for (let k=1; k<=9; k++){
       
        console.log(`${n} * ${k} = ${k*n}`);
    } 
    console.log();
} 


<script>
        function gugu(){
            let n = Number(document.getElementById('n').value);
            let resTag = document.getElementById('result');
            //num이라는 id에의해 구분되는 element를 가져와서 값을 가져와라
            let res='';
            for (let k=1; k<=9; k++){

                res += `<h4> ${n} * ${k} = ${k*n}</h4>`
            } 
            resTag.innerHTML = res;
            
            
        }
    </script>
</head>
<body>
    <h3>구구단</h3>
    <input type="text" id="n" placeholder="자연수를 입력하세요">
    <button onclick="gugu()">확인</button>
    <br>
    <p id="result"></p>
</body>