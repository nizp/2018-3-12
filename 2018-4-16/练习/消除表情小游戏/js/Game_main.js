var data = [
	'img/demonI.png',
	'img/demonII.png',
	'img/demonIII.png',
	'img/demonIV.png',
	'img/demonV.png'
];

let arr = [14,600]; //小人left的范围


const content = document.querySelector('.content');
let winlose = content.getElementsByTagName('div');
let btn = document.querySelector('.btn');

let speed = 10000;
let num1 = 0; //得分
let num2 = 0;//失分
let pjs = true;

btn.onclick = function(){
	/*
		运动
	*/
	init(true,function(){
		playGame();
	});
}

//初始化
function init(onOff,play){ //true:运动  false:还原  play当按钮运动到指定位置，就开始游戏
	btn = document.querySelector('.btn');
	move({
		el:winlose[0],
		attr:{
			left:onOff?-100:14
		},
		d:300
	});
	move({
		el:winlose[1],
		attr:{
			left:onOff?-100:14
		},
		d:300
	});
	
	move({
		el:btn,
		attr:{
			bottom:onOff?-70:20
		},
		d:300,
		callback(){
			play && play();
		}
	});
	if(!onOff){
		const winlose1 = document.getElementsByClassName('winNum')[0];
		const winlose2 = document.getElementsByClassName('loseNum')[0];
		winlose1.innerHTML = winlose2.innerHTML = '0分';
		num1 = num2 = 0;
		speed = 10000;
		btn.onclick = function(){
			/*
				运动
			*/
			init(true,function(){
				playGame();
			});
		}
		setTimeout(function(){
			alert('游戏结束');
		},400);
	}
}

/*
	调人
*/
function playGame(){
	/*
		1.创建小人

			随机取小人儿
			随机取小人儿的位置

		2.下落
	*/
	let img = `<img 
		id="img"
		src="${data[Random(data,0,data.length-1)]}" 
		style="position:absolute;
		left:${Random(arr)}px;
		top:0;">
	`;

	content.innerHTML += img;

	const imgEle = document.getElementById('img');
	const winlose1 = document.getElementsByClassName('winNum')[0];
	const winlose2 = document.getElementsByClassName('loseNum')[0];
	
	imgEle.onclick = function(){
		if(!pjs)return;
		pjs = false;
		winlose1.innerHTML = ++num1 + '分';
		speed -= 1000;
		imgEle.src = 'img/demonVI.png';
		cancelAnimationFrame(imgEle.timer);
		dou(this,'left',10,function(){
			pjs = true;
			imgEle.remove();
			//删除之后重新启动游戏
			playGame();
		});
	}

	//下落
	move({
		el:imgEle,
		attr:{
			top:350
		},
		d:speed,
		callback(){
			/*
				落到目标点
			*/
			dou(content,'top',10,function(){
				winlose2.innerHTML = ++num2 + '分';
				imgEle.remove();
				/*
					三次生命用完
				*/
				if(num2 >= 3){
					init();
				}else{
					//删除之后重新启动游戏
					playGame();
				}
			});
		}
	});
}

/*
	找出数组中的随机范围
*/
function Random(arr,min,max){
	//[0,39,88,3,77]
	min = min || Math.min(...arr) || 0;
	max = max || Math.max(...arr) || 0;
	return Math.round(Math.random() * (max-min))  + min;
}

// console.log(Random(arr))










