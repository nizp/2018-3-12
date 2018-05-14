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
        checkedAll.className = '';
        return;
    }else{
        fEmpty.style.display = 'none';
        /*
            只要点击了checked之后，一定会走render
        */

        checkedAll.className = arr.every(e=>e.checked)?' checked':'';
        arr.forEach(e=>{
            let div = document.createElement('div');
            div.className = 'file-item' + `${e.checked?' hov':''}`;
            //为了选中操作。
            div.dataset.id = e.id;
    
            let img = document.createElement('img');
            img.src = 'img/folder-b.png';

            /*
                双击进去
                当双击图片的时候把当前的数据(同一层)和点进去的子级数据(下一层数据checked都清空)

            */
            img.ondblclick = function(){
                arr.forEach(e=>e.checked = false);
                let childArr = t.getChild(e.id);
                if(childArr){
                    childArr.forEach(e=>e.checked = false);
                }
                render(e.id);
                renderNav(e.id);
            }
    
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;
    
            let input = document.createElement('input');
            input.className = 'editor';
            input.value =  e.title;
    
            let i = document.createElement('i');
            i.onclick = function(){
                // i.classList.toggle('checked');
                // if(i.classList.contains('checked')){
                //     div.classList.add('hov');
                // }else{
                //     div.classList.remove('hov');
                // }
                // console.log(arr);
                e.checked = !e.checked;
                render(id);
            }
    
            i.className = e.checked?'checked':'';
    
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
            folders.appendChild(div);
        });

        checkedAll.onclick = function(){
            /*
                当没有数据的时候就不能全选
                只有有数据的时候才有全选操作。
            */
            if(fEmpty.style.display == 'none'){
                let onOff = this.classList.toggle('checked');
                arr.forEach(e=>e.checked = onOff);
                render(id);
            }
        }
    }
  
}


