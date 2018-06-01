/***************import {fn} from './2';*********************/
//import要包括号
// function fn(){
//     return 1;
// }
// export {fn}


// export function fn(){
//     return 5;
// };


/*********import fn from './2'***************/

//import的时候不能加括号

// export default function fn(){
//     return 5;
// };


/*******as是更换名字********/
// function fn(){
//    return 7;
// };

// export {fn as nf}

// function fn(){
//     return 8;
// }
// let num = 12;

// export {fn,num}


/*
    default只能有一个

    如果既有default也有export{}

    import fn,{num} from './2';

*/
export default function fn(){
    return 8;
}

let num = 12;

export {num};


