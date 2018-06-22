<template>
        <ul id="rightList">	
            <router-link 
                tag="li"  
                v-for="(val,key) in arr"
                :to="{path:`/detail/${$route.params.id}/${$route.params.num*4+key}`}"
            >
                    <span class="num">{{todou($route.params.num*4+key+1)}}</span>
                    <div class="list">
                        <a href="">
                            <span class="job">
                                {{val.zw}}
                            </span>
                            <span>需求人数：{{val.rs}}名</span>
                            <time>{{val.sj.join('-')}}</time>
                        </a>
                        <p><span class="text">{{val.info[0].t}}:{{val.info[0].l.join('')}}</span><a href="javascript:;">查看详情>></a></p>
                    </div>
            </router-link>
        </ul>
</template>

<script>
    export default {
        name:"Clist",
        props:['arr'],
        methods:{
            todou(n){
                return n<10?'0'+n:''+n;
            }
        }
    }
</script>

<style>

</style>