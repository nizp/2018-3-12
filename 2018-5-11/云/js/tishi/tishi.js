const fullTipBox = document.querySelector('.full-tip-box');

// openFullTip();
// fullTipBox.style.top = 28 + 'px';
function openFullTip(txt){
    let s = fullTipBox.querySelector('.tip-text');
    fullTipBox.style.opacity = 0;
    s.innerHTML = txt;
    t.moveFn({
        el:fullTipBox,
        attr:{
            top:28,
            opacity:1
        },
        sportName:'bounceOut',
        callback:function(){
            setTimeout(function(){
                t.moveFn({
                    el:fullTipBox,
                    // sportName:'elasticOut',
                    attr:{
                        top:-50,
                        opacity:0
                    }
                })
            },1000);
        }
    });
}

