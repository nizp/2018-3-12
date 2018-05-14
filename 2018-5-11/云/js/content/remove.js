const del = document.getElementById('del');
const tanbox = document.getElementById('tanbox');
del.onclick = function(){
    //点击删除按钮的时候获取可视区中的同一级数据
    let pid = breadNav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    //判断这些数据中有没有选中，选中就把弹框打开
    if(arr.some(e=>e.checked)){
        tanbox.style.display = 'block';
    }
    tanbox.onclick = function(ev){
        if(ev.target.innerHTML == '确定'){
            /*
                循环数组，如果是选中状态的，套拿到选中id下所有的数据
                并且删除
            */
            arr.forEach(e=>{
                if(e.checked){
                    let removeArr = t.getChilds(e.id).concat(data[e.id]);
                    removeArr.forEach(e=>delete data[e.id]);
                }
            });
            //数据删除就重新渲染
            render(pid);
            treeMenu.innerHTML = renderTree(-1,-1);
            tanbox.style.display = 'none';
        }
        
        if(ev.target.innerHTML == '取消' || ev.target.innerHTML == 'X'){
            tanbox.style.display = 'none';
        }
    }
}

