<template>
    <div>
        <div id="content">
			<div id="rightTop">
				<a id="a" href="list2.html" class="goback">&lt;&nbsp;返回招聘列表</a>
				<a href="javascript:;">投个简历</a>
			</div>
			<div id="title">
				<p>前端开发工程师</p>
				<div class="simple">18k-25k<span>/</span>北京<span>/</span>经验3-5年<span>/</span>本科及以上<span>/</span>2名 <time>2014-04-10</time></div>
			</div>
			<div id="bottom">
					
			</div>
		</div>
    </div>
</template>
<script>
    export default {
        name:"Content"
    }
</script>

<style scoped>
html,body{
    width: 100%;
    height: 100%;
    margin: 0;
}
body{
    background: url("../img/zpbg.png") no-repeat center center;
    background-size: cover;
    display: flex;
    color:#b6bdcf;
}
ul,li{
    margin: 0;
    padding: 0;
    list-style: none;
}
dl,dd{
    margin: 0;
    padding: 0;
}
p{
    margin: 0;
}
a{
    text-decoration: none;
    color:#b6bdcf;
}
#content{
    width: 650px;
    height: 460px;
    border-radius: 10px;
    border: 1px solid #30343f;
    margin: auto;
    background: url("../img/logo.png") no-repeat 25px 25px #252934;
    box-sizing: border-box;
    padding: 84px 25px 0px;
    position: relative;
}
#rightTop{
    position: absolute;
    right: 0;
    top: 0;
    width: 285px;
}
#rightTop a{
    float: left;
    line-height: 80px;
    margin-right: 34px;
    font-size: 14px;
}
#rightTop a:nth-of-type(2){
    border: 1px solid #ff2c4f;
    border-radius: 28px;
    width: 110px;
    height: 28px;
    text-align: center;
    color: #ff2c4f;
    line-height: 28px;
    margin-top: 23px;
}
#rightTop a:nth-of-type(1):hover{
    color:#ff2c4f;
}
#rightTop a:nth-of-type(2):hover{
    background-color: #ff2c4f;
    color: #000;
}
#title{
    border-bottom: 1px dashed #303642;
    height: 77px;
}
#title p{
    font: 24px/38px "微软雅黑";
}
.simple{
    font: 14px/30px "微软雅黑";
}
.simple span{
    width: 20px;
    display: inline-block;
    text-align: center;	
}
.simple time{
    color: #5c6675;
    float: right;
    width: 100px;
    font: 12px/30px "微软雅黑";
}
#content dl{
    margin-top: 13px;
}
#content dt{
    font: 16px/27px "微软雅黑";
}
#content dd{
    font: 14px/25px "微软雅黑";
    color: #677282;
}
</style>