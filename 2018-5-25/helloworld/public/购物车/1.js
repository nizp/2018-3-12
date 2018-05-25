let ul1 = document.getElementById('ul1');
let ul2 = document.getElementById('ul2');
let list1 = Array.from(ul1.children);
// let result = []; //存放点击数据的

let result = JSON.parse(localStorage.getItem('key')) || [];

render();

window.addEventListener('storage',function(){
	result = JSON.parse(localStorage.getItem('key'));
	render();
});

//删除

ul2.onclick = function(ev){
	if(ev.target.tagName === 'LI'){
		ev.target.remove();
		result = result.filter(e=>e!=ev.target.innerHTML);
		localStorage.setItem('key',JSON.stringify(result));
	}
}

list1.forEach(e=>{
	e.onclick = function(){
		if(!result.some(el=>el==e.innerHTML)){
			result.push(e.innerHTML);
			localStorage.setItem('key',JSON.stringify(result));
			render();
		}
	}
});

function render(){
	let html = '';
	result.forEach(e=>{
		html += `<li>${e}</li>`;
	});
	ul2.innerHTML = html;
}





