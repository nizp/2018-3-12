const remove = document.getElementById('remove');
const modelTree = document.querySelector('.modal-tree');
const contentTree = document.querySelector('.content');
const cancel = document.querySelector('.cancel');
const iconClose = document.querySelector('.icon_close');
let checkedId = -1; //选中要移动的id
remove.onclick = function(){
    let pid = breadNav.getElementsByTagName('span')[0].dataset.id;
    let arr = t.getChild(pid);
    //框选||勾选的id
    if( arr.some(e=>e.checked) ){
        //把目录树创建起来
        contentTree.innerHTML = renderTree(-1,-1);

        let contentTreeChilds = contentTree.querySelectorAll('.tree-title');
        for(let i=0;i<contentTreeChilds.length;i++){
            contentTreeChilds[i].onclick = function(){
                for(let i=0;i<contentTreeChilds.length;i++){
                    contentTreeChilds[i].style.background = '';
                }
                this.style.background = 'rgba(204, 204,204,1)';
                //得到选中要移动的id
                checkedId = this.children[0].dataset.id;
            }
        }


        let ok = modelTree.querySelector('.ok');//点击确定要移动
        ok.onclick = function(){
            //哪几个是要移动的。

            let checkedData = arr.filter(e=>e.checked);
            /*
                勾选的id不能和移动到的id一样
                也不能放到自己的子级中
                    我们可以拿到选中数据下的所有数据  下面的arr
                    去判断里面有没有包含checkedId
                    如果包含就说明把老爹放子级
            */
            // console.log(checkedData);

            //当前选中数据的数据线索（当前数据,当前数据的子数据）
            let dataLine = [];
            checkedData.forEach(e=>{
                //每一次的数据线索
                let arr = t.getChilds(e.id).concat(data[e.id])
                dataLine.push(...arr);
            });
        
            /*
                如果说所有的线索中都没有移动到的id
                就可以更改pid的值。
            */
            if(!dataLine.some(e=>e.id == checkedId)){
                checkedData.forEach(ee=>{
                    //把选中数据的pid换成点击的id下
                    ee.pid = checkedId*1;
                    ee.checked = false;
                });
            }else{
                openFullTip('非法移动,报警了!');
                //alert('站住，你已经被包围了');
            }
            render(pid);
            treeMenu.innerHTML = renderTree(-1,-1);
            modelTree.style.display = 'none';
  
        }
        modelTree.style.display = 'block';
    }else{
        openFullTip('请选择要移动的文件!');
        // alert('请选择要移动的文件');
    }
}
cancel.onclick = iconClose.onclick = function(){
    modelTree.style.display = 'none';
}

