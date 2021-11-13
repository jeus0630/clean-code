/**
 * 배열 구조분해 할당 팁을 알아본다.
 */

function formatDate(targetDate){
    // const date = targetDate.toISOString().split('T')[0];
    const [date] = targetDate.toISOString().split('T'); // 구조분해할당으로 인덱스 삭제 가능
}