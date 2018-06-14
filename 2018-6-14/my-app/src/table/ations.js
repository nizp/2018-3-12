const ADD_DATA = 'ADD_DATA';
const UP_MOVE = 'UP_MOVE';
const DOWN_MOVE = 'DOWN_MOVE';
const CHANGE_CHECKED = 'CHANGE_CHECKED';

function addData(name,age){
    return {
        type:ADD_DATA,
        data:{
            'id': +new Date(),
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

function downMove(id){
    return {
        type:DOWN_MOVE,
        id
    }
}

function ccFn(id){
    return {
        type:CHANGE_CHECKED,
        id
    }
}

function changeAll(checked){
    return {
        type:"CHANGE_ALL",
        checked
    }
}

function remove(){
    return {
        type:"REMOVE"
    }
}

function sortAction(v1,v2){
    return {
        type:"SORT_DATA",
        val:{v1,v2}
    }
}

function dele(id){
    return {
        type:"DELE",
        id
    }
}

export {addData,upMove,ccFn,downMove,changeAll,remove,sortAction,dele}