/**
 * else if 를 지양한다
 */

const x = 1;
if(x>=1){
    console.log('first block');
}else if(x>0){
    console.log('second block');
}

if(x>=1){
    console.log('first block');
}else{
    if(x>0){
        console.log('second block');
    }
}