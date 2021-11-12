function today(condition, weather, isJob){
    if(condition === 'GOOD'){
        공부();
        게임();
        유투브보기();

        if(weather === 'GOOD'){
            운동();
            빨래();
        }

        if(isJob === 'GOOD'){
            야간업무();
            조기취침();
        }
    }
}

/**
 *
 * Early pattern을 사용하면
 * 분기가 깔끔해진다
 *
 */

function today(condition, weather, isJob){
    if(condition !== 'GOOD'){
        return
    }

    공부();
    게임();
    유투브보기();

    if(weather !== 'GOOD'){
        return
    }

    운동();
    빨래();

    if(isJob !== 'GOOD'){
        return
    }

    야간업무();
    조기취침();
}