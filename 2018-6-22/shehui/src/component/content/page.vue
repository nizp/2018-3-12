<template>
    <div>
        <nav id="nav">
            <a 
                href="javascript:;"
                @click="back"
            >&lt;</a>
            <router-link 
                v-for="num in n"
                :to="{path:`/${$route.params.id}/${num-1}`}"
            >{{num}}</router-link>
            <a 
                href="javascript:;"
                @click="go"
            >&gt;</a>
        </nav>
    </div>
</template>

<script>
    export default {
        name:"Page",
        props:['n','dd'],
        methods:{
            go(){
                let {id,num} = this.$route.params;
                num++;
                if(this.n > num){
                    this.$router.push({
                        path:'/'+id+'/'+num
                    });
                }
            },
            back(){
                let {id,num} = this.$route.params;
                num--;
                if(num >= 0){
                    this.$router.push({
                        path:'/'+id+'/'+num
                    });
                }
            }
        }
    }
</script>

<style>
.router-link-exact-active{
    color:red;
}
</style>