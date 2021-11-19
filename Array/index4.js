/**
 * 유사 배열 객체
 */

const arrayLikeObject = {
    0: "Hello",
    1: "World",
    length: 2
}

const arr = Array.from(arrayLikeObject);
console.log(Array.isArray(arr));