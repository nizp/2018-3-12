const treeMenu = document.querySelector('.tree-menu');

/* <ul>
    <li>
        <div class="tree-title tree-ico close">
            <span><i></i>微云</span>
        </div>
        <ul>
            <li>
                <div class="tree-title tree-ico close">
                    <span><i></i>我的音乐</span>
                </div>
            </li>
        </ul>
    </li>
</ul> */
/*
    根据pid找它下面的子数据
    如果有子数据，就循环子数据生成li
    如果li下还有子数据就递归生成ul > li ....

    num：计算当前层是第几层

*/
function renderTree(pid,num){
    let child = t.getChild(pid);
    if(!child)return ''; //如果没有子数据直接返回空字符串
    num ++;
    let html = `<ul style="padding-left:${num*10}px">`;
    child.forEach(e=>{
        html += ` 
            <li>
                <div class="tree-title">
                    <span data-id="${e.id}" class="${t.getChild(e.id)?('open'):('')}"><i></i>${e.title}</span>
                </div>
                ${renderTree(e.id,num) /*有自数据就递归*/}
            </li>`;
    });
    html += '</ul>';
    return html;
}

treeMenu.innerHTML = renderTree(-1,-1);