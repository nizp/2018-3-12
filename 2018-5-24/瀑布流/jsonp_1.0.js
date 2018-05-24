function jsonp(obj){
    let opt = {
        url:'',
        success:function(){},
        data:{},
        error:function(){},
        callback:'callback'
    }
    Object.assign(opt,obj);
    let onOff = false;
    let arr = [];
     //函数名不能有小数
     let fnName = ('jQuery'+(Math.random())).replace('.','')+'_'+new Date().getTime();
    // console.log()

    /*
        {
            wd:'sd'
        }

        {
            wd:'sd',
            cb:fnName
        }
    */
    opt.data[opt.callback] = fnName;

    console.log(opt.data)

    for(let attr in opt.data){
        arr.push(attr +'='+ opt.data[attr]);
    }
    opt.data = arr.join('&');

    console.log(opt.data); //wd=ser&cb=jquery32332

    window[fnName] = function (data){
        // console.log(data);
        onOff = true;
        opt.success(data);
    }

    setTimeout(function(){
        if(!onOff){
            opt.error();
        }
    },10000);

    let os = document.createElement('script');
    // opt.data = wd=ser&a=123
    // os.src = opt.url + '?' + opt.callback+'='+ fnName +'&' +  opt.data;
    os.src = opt.url + '?' + opt.data;
    document.getElementsByTagName('head')[0].appendChild(os);
    os.remove();
}