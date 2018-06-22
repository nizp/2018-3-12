/*var resize='orientationchange' in window?'orientationchange':'resize';
function change(){
	var html=document.documentElement;
	html.style.fontSize=document.documentElement.clientWidth/16+'px';
}

window.addEventListener(resize,change,false);
window.addEventListener('load',change,false);
document.addEventListener('DOMContentLoaded',change,false);
*/


window.onload=onresize=function(){
	var html=document.documentElement;
	html.style.fontSize=document.documentElement.clientWidth/16+'px';
	var oBox=document.getElementById('header_box');
};