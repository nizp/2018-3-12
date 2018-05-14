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
const email = document.getElementById('email');
list.forEach(e=>e.check = false); //添加选中的状态。
render(list); //第一次渲染


function render(list){
	//生成数据
	let html = '';
	list.forEach(e=>{
		html += `<li class="${e.check?'active':''}">
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







// console.log(list);




