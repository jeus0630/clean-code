/**
 * 자바스크립트 배열 length 조작시
 * 발생하는 현상에 대해 알아본다.
 */

const arr = [1,2,3];
arr.length = 0;
console.log(arr);

Array.prototype.clear = function(){
    this.length = 0;
}

const arr2 = [1,2,3,4,5,6,7,8,9,10];
arr2.clear();
console.log(arr2); // [] 출력