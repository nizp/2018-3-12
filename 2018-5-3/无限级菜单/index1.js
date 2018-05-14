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
            
        }
    }
})



