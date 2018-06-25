<template>
    <div>
        <img v-show="loading" src="./img/1.gif" alt="">
        <input type="text" ref="txt">
        <button
            @click="changeData($refs.txt.value)"
        >点击更新</button>
        <strong>{{obj.title}}一共搜索{{obj.total}}条</strong>
        <ul>
            <li 
                class="list" 
                v-for="(val,key) in obj.subjects"
            >
                <img 
                    :src="val.images.medium"
                    :title="val.title"
                >
                <p>{{val.title}}</p>
                <p>{{val.rating.average}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
//https://api.douban.com/v2/movie/search?q="侏罗纪2"

//api/movie/search?q="1123"
import axios from 'axios'
export default {
    name:"PPA",
    created(){
        this.changeData();
    },
    
    //不要修改数据
    beforeUpdate(){
        console.log('数据修改')
    },
    methods:{
       async changeData(txt="侏罗纪",num=0){
            this.loading = true;
            let json = await axios.get('api/movie/search?q='+txt+'&start='+num)
            this.obj = await json.data;
            this.loading = false;
            console.log(this.obj)   
        }
    },
    data(){
        return {
            loading:false,
            obj:{}
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.list{
    width:115px;
    height: 213px;
    float: left;
    margin: 10px
}
.list img{
    width:115px;
    height: 161px;
}
.list p{
    width:96px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    overflow: hidden;
}
</style>