function ajax(json){
    var obj = {
        url:'',
        data:{},
        success:function(){},
        fail:function(){},
        methods:'get',
        dataType:'json',
        sync:true
    }

    for(var attr in json){
        obj[attr] = json[attr];
    }

    var ajax = new XMLHttpRequest;
    var arr = [];
    obj.data['sj'] = +new Date;

    for(var attr in obj.data){
        arr.push(attr + '=' + obj.data[attr])
    }
    // console.log(arr,obj.data);
    // console.log(arr.join('&')+'&sj='+Date.now())

    if(obj.methods.toLowerCase() === 'get'){
        ajax.open('get',obj.url + '?' + arr.join('&'),obj.sync);
        ajax.send();
    }else if(obj.methods.toLowerCase() === 'post'){
        ajax.open('post',obj.url,obj.sync);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(arr.join('&'));
    }

    if(obj.sync == false){
        sf();
        return;
    }

    ajax.onreadystatechange = function(){
        if(ajax.readyState == 4){
            sf();
        }
    }

    function sf(){
        if(typeof obj.fail !== 'function' || typeof obj.success !== 'function'){
            alert('^_^!');
        }else{
            if(ajax.status >= 200 && ajax.status <= 207 || ajax.status == 302 || ajax.status == 304){
                //console.log(eval('('+ajax.responseText+')'));
                if(obj.dataType == 'xml'){
                    obj.success(ajax.responseXML);
                }else if(obj.dataType == 'json'){
                    obj.success(eval('('+ajax.responseText+')'));
                }else{
                    obj.success(ajax.responseText);
                }
            }else{
                obj.fail(ajax.status);
            }
        }
    }

}


