/**
 * Javascript private
 * private member 변수나 함수 설정시에
 * # prefix를 이용할 수 있다.
 */

class MyClass{
    #name

    constructor() {
        this.#name = 'jewoo';
    }

    get name(){
        return this.#name;
    }
}

const user = new MyClass();
console.log(user.name);