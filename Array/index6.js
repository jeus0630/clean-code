/**
 *
 * 배열 고차 함수
 *
 * 1. 원화 표기
 * 2. 1000원 초과 리스트만 출력
 * 3. 가격 순 정렬
 *
 */

const price = ['1000','2000','3000','4000','5000'];

const getWon = el => el + 'won';
const isOverOneThousand = el => parseInt(el,10) > 1000;

function getWonPrice(arr){
    return arr.map(getWon);
}

function getOverOneThousand(arr){
    return arr.filter(isOverOneThousand);
}

