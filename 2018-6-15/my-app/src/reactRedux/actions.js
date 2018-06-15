export function click(data){
    return {
        type:"ADD_GWC",
        data
    }
}

export function add(id){
    return {
        type:"ADD_NUM",
        id
    }
}

export function minus(id){
    return {
        type:"MINUS_NUM",
        id
    }
}
