const box = document.querySelector('.box');
const lis = box.children;
let arr = [];
for(let i=0;i<lis.length;i++){
	arr.push(lis[i].offsetTop);
	lis[i].style.top = lis[i].offsetTop + 'px';
}
for(let i=0;i<lis.length;i++){
	lis[i].style.position = 'absolute';
	lis[i].onclick = function(ev){
		//上移
		if(ev.target.innerHTML === '上移'){
			let parent = ev.target.parentNode; //老爹
			let prev = parent.previousElementSibling; //上一个大爷
			//insertBefore，如果第二个参数没有，就等于appendChild
			// if(prev){
			// 	box.insertBefore(parent,prev);
			// }else{
			// 	box.appendChild(parent);
			// }
			box.insertBefore(parent,prev);
			m();
		}
		//下移
		if(ev.target.innerHTML === '下移'){
			let parent = ev.target.parentNode; //老爹
			let next = parent.nextElementSibling;//下一个老叔
			/*
				如果有下一个老叔，把老叔放在老爹上面
				如果没有就把老爹放到第一个老叔的上面
			*/
			if(next){
				box.insertBefore(next,parent);
			}else{
				box.insertBefore(parent,lis[0]);
			}
			m();
		}
	}
}
/*
	DOM改变了还要让对应的top值跟arr对应
*/
console.log(arr);
function m(){
	for(let i=0;i<lis.length;i++){
		move({
			el:lis[i],
			attr:{
				top:arr[i]
			},
			d:500
		});
	}
}
