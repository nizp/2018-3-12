const create = document.getElementById('create');
create.onOff = true;
create.onclick = function(){
    if(!create.onOff)return;
    let pid = breadNav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    checkedAll.className = '';
    createItem(arr,pid);
}
/*
    虚拟的dom元素
        在碰撞的时候有坑？
*/
function createItem(arr,pid){
        let num = 0;
        if(arr){
            let filterArr = arr.filter(e=>e.title.includes('新建文件夹'));
            if(filterArr.length)num = filterArr.length+1;
        }else{
            fEmpty.style.display = 'none';
        }
        
        let div = document.createElement('div');
        div.className = 'file-item lang';
        let img = document.createElement('img');
        img.src = 'img/folder-b.png';
        // let span = document.createElement('span');
        // span.className = 'folder-name';
        let input = document.createElement('input');
        input.className = 'editor';
        input.style.display = 'block';
        input.value = '新建文件夹'+(num?num:'');
        input.onchange = function(){
            console.log('修改了数据');
            create.onOff = true;
        }
        input.onblur = function(){
            /*
                1.失焦的时候要看一看兄弟元素的名字有没有重名

                2.必须要有文字,默认为新建文件夹

                3.给个标识证明它就是新建文件夹
                
                当点击创建按钮的时候，循环一下当前目录所有的文件夹名字
                把重复的拿出来，给未失焦的那条数据
            */
            let val = this.value;
            //重名
            if(arr && arr.some(e=>e.title == val)){
                create.onOff = false;
                this.focus();
                this.select();
                openFullTip('名字重复!');
            }else{
                create.onOff = true;
                //可以添加数据
                // console.log(pid);
                let createId = +new Date;
                data[createId] = {
                    "id": createId,
                    // "pid":pid,
                    pid,
                    "title": val,
                    "type": "file",
                    "checked":false
                }
                render(pid);
                treeMenu.innerHTML = renderTree(-1,-1);
            }
        }
        let i = document.createElement('i');   
        div.appendChild(img);
        // div.appendChild(span);
        div.appendChild(input);
        div.appendChild(i);
        folders.appendChild(div);
        input.select();
}