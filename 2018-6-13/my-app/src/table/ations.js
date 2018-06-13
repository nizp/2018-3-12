const ADD_DATA = 'ADD_DATA';
const UP_MOVE = 'UP_MOVE';
const CHANGE_CHECKED = 'CHANGE_CHECKED';

function addData(name,age){
    return {
        type:ADD_DATA,
        data:{
            'id': +new Date,
            name,
            'price': age,
            'checked': false
        }
    }
}

function upMove(id){
    return {
        type:UP_MOVE,
        id
    }
}

function ccFn(id){
    return {
        type:CHANGE_CHECKED,
        id
    }
}

export {addData,upMove,ccFn}