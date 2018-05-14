const box = document.querySelector('.box');
const lis = box.children;


for(let i=0;i<lis.length;i++){
	lis[i].onclick = function(ev){
		//上移
		if(ev.target.innerHTML === '上移'){
			let parent = ev.target.parentNode; //老爹
			let prev = parent.previousElementSibling; //上一个大爷
			if(prev){
				box.insertBefore(parent,prev);
			}else{
				box.appendChild(parent);
			}
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
		}

	}
}
