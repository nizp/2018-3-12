
/*
    轮播
*/
// function Carousel(){}
// $.extend(Carousel.prototype,{
//     init:function(){

//     }
// });
class Carousel {
    constructor(that){
        this.box = that;
        this.opt = {
            imgs:[],
            w:446,
            h:244
        }
        this.timer = null;
        this.num = 0;
    }
    init(opt){
        $.extend(this.opt,opt);
        this.createLink();
        this.createLi();
        this.go();
    }
    //创建li
    createLi(){
        let {imgs,w} = this.opt;
        let len = imgs.length;
        let iW = len * w;
        let ul =$(`<ul style="position:relative;width:${iW}px">`);
        $.each(imgs,(i,e)=>{
            this.box.append(ul.append($(`<li><img src="${e}"/></li>`)));
        });
        this.ul = ul; //让全局有这个ul;
    }
    //生成css
    createLink(){
        let $link = $('<link rel="stylesheet" href="./car.css">')
        $('head').append($link);
    }

    //轮播逻辑
    go(){
        let {num,timer,opt,ul} = this;
        timer = setInterval(()=>{
            num ++;
            num %= opt.imgs.length;
            ul.animate({
                left:-opt.w * num
            });
        },1000);
    }
}

$.fn.extend({
    carousel(opt){
        let car = new Carousel(this);
        car.init(opt);
        return this;
    }
});