/**
 * 1. 매개변수가 2개가 넘지 않도록 만든다.
 * 2. arguments, rest parameter 사용
 * 3. 매개변수를 객체에 담아서 넘긴다 (순서가 상관이 없어짐)
 * 4. 랩핑하는 함수 (기존 함수를 호출 하는 함수 생성)
 */

const obj = {
    name : 'jewoo',
    age : 28,
    area : 'seoul'
}

function logUser({name, age, area}){
    return `my name is ${name}, age is ${age}, area is ${area}`;
}

console.log(logUser(obj));