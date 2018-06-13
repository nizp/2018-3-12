const ADD_DATE = 'ADD_DATE'; //添加数组数据
const ADD_NUM = 'ADD_NUM'; //加数字
const MINUS_NUM = 'MINUS_NUM'; //减数字

function addNum(){
    return {
        type:ADD_NUM,
        payload:1
    }
}

function minusNum(){
    return {
        type:MINUS_NUM,
        payload:1
    }
}

function addDate(val){
    return {
        type:ADD_DATE,
        add:{txt:val,id:+new Date}
    }
}

export {addDate,addNum,minusNum}