console.log(arr);

const oUl = document.getElementById('oUl');

function render(arr){
    let html = '';
    arr.forEach((e,i) => {
        html += '<li>';
        html += `<span class="${e.child?'add':''}">${e.title}</span><div></div>`;
        if(e.child){
            html += `<ul>${render(e.child)}</ul>`;
        }
        html += '</li>';
    });
   
    return html;
}

oUl.innerHTML = render(arr);

const span = Array.from(document.getElementsByTagName('span'));

span.forEach(e=>{
    e.onclick = function(){
        let parent = e.parentNode; //拿到当前对应的li
        let ul = parent.children[2]; //能够展开的ul
        if(ul){ //如果有ul就展开
            if(e.classList.contains('line')){
                e.className = 'add';
                ul.style.display = 'none';
            }else{
                e.className = 'line';
                ul.style.display = 'block';
            }

            /*
                让兄弟收起
                1.先找到爷爷      let ul = e.parentNode.parentNode
                2.通过爷爷找父辈   ul.children
                3.排除老爹 = 叔叔们 if(ul.children[i] != e.parentNode)
            */
            let pUl = e.parentNode.parentNode;
            let list = pUl.children;
           
            for(let i=0;i<list.length;i++){
                if(list[i] != e.parentNode){
                   
                    //找到叔叔们下的ul
                    let uncUl = list[i].getElementsByTagName('ul');
                    for(let j=0;j<uncUl.length;j++){
                        //找ul的大哥 = ul.上一个哥.上一个哥
                        let spans = uncUl[j].previousElementSibling.previousElementSibling;
                         //循环要操作的ul，把它们都隐藏
                        uncUl[j].style.display = 'none';
                        //ul的大哥的className = 'add';
                        spans.className = 'add';
                    }
                }
            }
        }
    }
});



