/*
* t : time 已过时间
* b : begin 起始值
* c : count 总的运动值
* d : duration 持续时间
*
* 曲线方程
*
* http://www.cnblogs.com/bluedream2009/archive/2010/06/19/1760909.html
* */

//Tween.linear();

var Tween = {
	linear: function (t, b, c, d){  //匀速
		return c*t/d + b;
	},
	easeIn: function(t, b, c, d){  //加速曲线
		return c*(t/=d)*t + b;
	},
	easeOut: function(t, b, c, d){  //减速曲线
		return -c *(t/=d)*(t-2) + b;
	},
	easeBoth: function(t, b, c, d){  //加速减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t + b;
		}
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInStrong: function(t, b, c, d){  //加加速曲线
		return c*(t/=d)*t*t*t + b;
	},
	easeOutStrong: function(t, b, c, d){  //减减速曲线
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		if ((t/=d/2) < 1) {
			return c/2*t*t*t*t + b;
		}
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		if (t === 0) { 
			return b; 
		}
		if ( (t /= d) == 1 ) {
			return b+c; 
		}
		if (!p) {
			p=d*0.3; 
		}
		if (!a || a < Math.abs(c)) {
			a = c; 
			var s = p/4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	elasticOut: function(t, b, c, d, a, p){    //正弦增强曲线（弹动渐出）
		if (t === 0) {
			return b;
		}
		if ( (t /= d) == 1 ) {
			return b+c;
		}
		if (!p) {
			p=d*0.3;
		}
		if (!a || a < Math.abs(c)) {
			a = c;
			var s = p / 4;
		} else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},    
	elasticBoth: function(t, b, c, d, a, p){
		if (t === 0) {
			return b;
		}
		if ( (t /= d/2) == 2 ) {
			return b+c;
		}
		if (!p) {
			p = d*(0.3*1.5);
		}
		if ( !a || a < Math.abs(c) ) {
			a = c; 
			var s = p/4;
		}
		else {
			var s = p/(2*Math.PI) * Math.asin (c/a);
		}
		if (t < 1) {
			return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		}
		return a*Math.pow(2,-10*(t-=1)) * 
				Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	},
	backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		if (typeof s == 'undefined') {
		   s = 1.70158;
		}
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	backOut: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 3.70158;  //回缩的距离
		}
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	}, 
	backBoth: function(t, b, c, d, s){
		if (typeof s == 'undefined') {
			s = 1.70158; 
		}
		if ((t /= d/2 ) < 1) {
			return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		}
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	},       
	bounceOut: function(t, b, c, d){
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		}
		return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	},      
	bounceBoth: function(t, b, c, d){
		if (t < d/2) {
			return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		}
		return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	}
}

let t = {
    moveFn(opt){
        // opt.attr = opt.attr || {};
        // opt.d = opt.d || 1000;
        // opt.el = opt.el || null;
        // opt.sportName = opt.sportName || 'linear';
        // opt.callback = typeof opt.callback === 'function' && opt.callback || function(){}
        //默认的配置
        let obj = {
            attr:{},
            d:1000,
            el:null,
            sportName:'linear',
            callback:function(){}
        }
    
        opt = Object.assign(obj,opt);
        
        let oldTime = Date.now();
        let j = {};
    
        for(let i in opt.attr){
            let b = parseFloat(getComputedStyle(opt.el)[i])
            j[i] = {
                b,
                c:opt.attr[i] - b
            }
        }
    
        ;(function animate(){
            
            opt.el.timer = requestAnimationFrame(animate);
            let t = Date.now() - oldTime;
            if(t >= opt.d){
                t = opt.d;
            }
            for(let attr in j){
                let v = Tween[opt.sportName](t, j[attr].b, j[attr].c, opt.d);
                if(attr === 'opacity'){
                    opt.el.style.opacity = v;
                }else{
                    opt.el.style[attr] = v + 'px';
                }
            }
            if(t === opt.d){
                cancelAnimationFrame(opt.el.timer);
                opt.callback.call(opt.el);
            }
    
        })();
    },
    arr:[],
    getChild(id){
        let childArr = [];
        for(let attr in data){
            if(data[attr].pid == id){
                childArr.push(data[attr]);
            }
        }
        //如果有子级就返回子级，没有返回null;
        if(childArr.length > 0){
            return childArr;
        }else{
            return null;
        }
    },
    getChilds(id){
        //拿到当前父级id下的所有子数据
        let child = this.getChild(id);
        //如果有子数据
        if(child){
            /*
                如果有子数据，再从子数据下继续查找子数据
            */
            child.forEach(e=>{
                t.arr.push(e);
                this.getChilds(e.id);
            });
        }
        return t.arr;
    },
    //通过当前的id找到父级的数据
    getParent(id){
        /*
            如果有这个数据 并且 不是微云
            就把父级的数据返回出去

            否则 返回null
        */
        if(data[id] && data[id].pid != -1){
            /*
                data[3].pid  = 2

                data[2] = 我的音乐
            */
            return data[data[id].pid];
        }
        return null;
    },
    //根据当前的id找到所有的父级
    getParents(id){
        let parentsArr = [];
        let now = data[id]; //当前的id  3

        /*
            3 周杰伦

            [3 周杰伦,2 我的音乐,0 微云]

            now = 2 我的音乐

            now = 0 微云

        */
        // debugger;
        //只要有父级数据就一直会循环
        while(now){
            parentsArr.unshift(now);
            now = this.getParent(now.id);
        }
        return parentsArr;
    },
    bong(box1,box2){
        let bl = box1.offsetLeft;
        let bt = box1.offsetTop;
        let br = bl + box1.offsetWidth;
        let bb = bt + box1.offsetHeight;
    
        let cl = box2.offsetLeft + box.offsetLeft;
        let ct = box2.offsetTop + box.offsetTop;
        let cr = cl + box2.offsetWidth;
        let cb = ct + box2.offsetHeight;
    
        if(br < cl || bb < ct || bl > cr || bt > cb){
            return false;
        }else{
            //碰到了
            return true;
        }
    }
}