<template>
    <div>
        <Clist :arr="changeArr"></Clist>
				<nav id="nav">
					<a href="javascript:;">&lt;</a>
					<a class="active" href="javascript:;">1</a>
					<a href="javascript:;">2</a>
					<a href="javascript:;">3</a>
					<a href="javascript:;">4</a>
					<a href="javascript:;">&gt;</a>
				</nav>
    </div>
</template>
<script>
    import data from '../data.js';
    import Clist from './clist.vue';
    export default {
        computed:{
            changeArr(){
                if(this.$route.params.id == 'xy'|| this.$route.params.id == 'sh'){
                    let arr = data[this.$route.params.id].text.concat();
                    console.log(arr)
                    arr.length = 4;
                    return arr;
                }
            }
            
        },
        name:"Content",
        components:{
            Clist
        }
    }
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
}
body{
    background: url("../img/zpbg.png") no-repeat center center;
    background-size: cover;
    display: flex;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
p{
    margin: 0;
}
a{
    text-decoration: none;
    color:#b6bdcf;
}
#app{
    margin: auto;
}
#content{
    width: 700px;
    height: 460px;
    border-radius: 10px;
    border: 1px solid #30343f;
    
    background: url("../img/logo.png") no-repeat 25px 25px #252934;
    box-sizing: border-box;
    padding: 84px 0px 0px 25px;
}
#leftList{
    float: left;
    width: 60px;
    padding-right: 12px;
    height: 100%;
    background: url("../img/leftListBg.png") no-repeat right top;
}
#leftList li{
    text-align: right;
    height: 68px;
    padding-top: 12px;
    color: #6a7686;
    font: 10px/18px "微软雅黑";
}
#leftList li span{
    font-size: 12px;
    display: block;
        cursor: pointer;
}
#leftList .router-link-exact-active span{
    color: #ff2c4f;
}
#right{
    width: 600px;
    height: 100%;
    float: left;
}

#rightList li{
    height: 82px;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 25px 20px 30px;
    position: relative;
        cursor: pointer;
}
#rightList li:hover{
    background-color: #1e212a;
}
#rightList li:hover .num{
    color: #ff2c4f;
}
#rightList li:hover:before{
    content: "";
    width: 2px;
    height: 54px;
    position: absolute;
    background-color: #ff2c4f;
    left: -3px;
    top: 10px;
}
#rightList li:after{
    content: "";
    width: 543px;
    height: 1px;
    position: absolute;
    bottom: 0px;
    right: 25px;
    background:url("../img/lineBg.png") repeat-x;
}
#rightList .num{
    font-size: 30px;
    font-family: arial;
    color:#6a7686;
    float: left;
    width: 36px;
    height: 40px;
    border-right: 1px solid #303642;
}
#rightList .list{
    float: left;
    width: 500px;
    margin-left: 6px;
    font-size: 14px;
    color: #b6bdcf;
    font-family: "微软雅黑";
}
#rightList .list span{
    float: left;
}

.list>a:nth-of-type(1){
    height: 26px;
    float: none;
    font-size: 14px;
}
.job{
    margin-right: 15px;
}
#rightList .list time{
    float: right;
    color: #606a7a;
}
.list .text{
    float: left;
    width: 430px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.list a{
    float: right;
    font-size: 12px;
}

nav{
    font-size: 0px;
    text-align: center;
}
nav a{
    font: 12px/46px "微软雅黑";
    display: inline-block;
    vertical-align: middle;
    width: 24px;
}
nav a.active{
    color: #eb2a4b;
}
</style>