/**
 * 부정조건문을 지양한다
 * 1. 생각을 여러번 해야한다
 * 2. 프로그래밍 언어 자체로 if문이 처음부터오고 true부터 실행한다
 *
 * 해결법
 * 함수로 빼서 사용한다
 *
 * 사용하는 경우
 * Early Return
 * Form Validation
 * 보안 혹은 검사하는 로직
 */

function isNumber(num){
    return !Number.isNaN(num);
}

if(isNumber(3)){
    console.log('숫자입니다');
}