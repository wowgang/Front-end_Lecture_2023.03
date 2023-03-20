let obj = {
    //속성(attribute) -사물과 관련
    name: '사과',
    price: 1000,

    //메소드(method) -동작과 관련
    print: function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`) //python은 this가아니라 self
    }
};
obj.print(); //사과의 가격은 1000원 입니다.