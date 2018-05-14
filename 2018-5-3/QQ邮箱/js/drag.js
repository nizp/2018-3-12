/*
	<li>
		<input type="checkbox" />
		<div>
			<span></span>
			<span></span>
		</div>
		<p></p>
	</li>
*/
/*
	写操作：
		data-xxx = "123"  给行间添加属性
	读操作:
		console.log(dataset.xxx) ->  123
	
*/
const email = document.getElementById('email');
list.forEach(e=>e.check = false); //添加选中的状态。
render(list); //第一次渲染


function render(list){
	//生成数据
	let html = '';
	list.forEach(e=>{
		html += `<li data-index="${e.id}" class="${e.check?'active':''}">
			<input type="checkbox" id="${e.id}" ${e.check?'checked':''} />
			<div>
				<span>${e.caption}</span>
				<span>${e.time}</span>
			</div>
			<p>${e.desc}</p>
		</li>`;
	});
	email.innerHTML = html;
	//点击操作
	const inputs = email.getElementsByTagName('input');
	for(let i=0;i<inputs.length;i++){
		inputs[i].onchange = function(){
			let _this = this;
			list = list.map(e=>{
				if(e.id == _this.id){
					e.check = _this.checked
				}
				return e;
			});
			//通过数据中每个的check值来设置all是否选中
			all.checked = list.every(e=>e.check);
			render(list);
		}
	}
}

//全选
all.onchange = function(){
	list.forEach(e=>e.check = all.checked);
	render(list);
}
let onOff = false;
email.onmousedown = function(ev){
	if(ev.target.tagName == 'INPUT')return;
	let li = getLi(ev.target);
	let o = list.some(e=>{
		if(e.id == li.dataset.index){
			return e.check;
		}
	});
	//如果li为选中的让拖拽的元素到坐标点
	if(o){
		let f = list.filter(e=>e.check);
		hint3.innerHTML = '选中'+ (f.length) +'封邮件'
		hint3.style.display = 'block';
		hint3.style.left = ev.pageX + 'px';
		hint3.style.top = ev.pageY + 'px';
	}
	document.onmousemove = function(ev){
		
		if( bong(hint3,delebox) ){
			onOff = true;
		}else{
			onOff = false;
		}
		hint3.style.left = ev.pageX + 'px';
		hint3.style.top = ev.pageY + 'px';
	}
	document.onmouseup = function(){
		hint3.style.display = 'none';
		if(onOff){
			list = list.filter(e=>!e.check);
			render(list);
			//如果数据清空,all变false
			all.checked = list.length?list.every(e=>e.check):false;
		}
		document.onmouseup = document.onmousemove = null;
	}
	return false;
};



function bong(box1,box2){
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


function getLi(ele){
	if(ele.tagName === 'LI')return ele;
	return getLi(ele.parentNode);
}








// console.log(list);




