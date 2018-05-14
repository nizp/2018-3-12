/*
    1.微云下有 id:0
        我的音乐  pid:0
        我的文档  pid:0
    渲染

    传入一个ID给你，你给我这个ID下的所有子级
    
*/
const folders = document.querySelector('.folders');
const fEmpty = document.querySelector('.f-empty');
render(0);
function render(id){
    folders.innerHTML = '';
    //拿到某个id下的所有子数据
    let arr = t.getChild(id);
    //如果没有子级arr为null，null就不能循环
    if(!arr){
        fEmpty.style.display = 'block';
        return;
    }else{
        fEmpty.style.display = 'none';
        arr.forEach(e=>{
            let div = document.createElement('div');
            div.className = 'file-item';
            //为了选中操作。
            div.dataset.id = e.id;
    

            let img = document.createElement('img');
            img.src = 'img/folder-b.png';

            /*
                双击进去
            */
            img.ondblclick = function(){
                render(e.id);
            }
    
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;
    
            let input = document.createElement('input');
            input.className = 'editor';
    
            let i = document.createElement('i');
            i.onclick = function(){
                i.classList.toggle('checked');
                if(i.classList.contains('checked')){
                    div.classList.add('hov');
                }else{
                    div.classList.remove('hov');
                }
            }
    
            // i.className = 'checked';
    
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            folders.appendChild(div);
        });
    }
  
}


