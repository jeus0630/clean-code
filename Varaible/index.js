/**
 *
 * 임시변수 사용을 지양해야 하는 이유
 * 1. 사용시 디버깅이 어렵다
 * 2. 명령어가 가득해진다
 * 3. 함수 내에서 추가코드를 작성하게 된다
 * 4. 함수가 하나의 역할만 하기 어려워진다
 *
 * 해결책
 * 1. 함수를 나눈다
 * 2. 바로 반환한다
 * 3. 고차함수를 사용한다 (map, filter, reduce)
 * 4. 선언식으로 한다
 */

function getData(){
    // 임수변수 사용시
    let result = '';

    result = {
        name : 'jewoo',
        age : 28,
        job : 'Frontend developer'
    }

    return result;
}

function getData(){
    // 임시변수 미사용
    return {
        name : 'jewoo',
        age : 28,
        job : 'Frontend developer'
    }
}

function getDataAndEdit(){
    return {
        name : getData().name + '입니다',
        age : getData().age + '살 이구요',
        job : getData().job + '직업을 갖고 있습니다'
    }
}
