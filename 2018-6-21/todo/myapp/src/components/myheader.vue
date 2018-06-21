<template>
     <header class="header" >
        <h1>todos</h1>
        <input 
            class="new-todo" 
            placeholder="请输入内容" 
            @keyup.13 = "add"
            ref="el"
        >
    </header>
</template>

<script>
export default {
    name:"Myheader",
    props:['addarr'],
    methods:{
        add(ev){
            /*
                ref="el"  通过加ref定位元素
                通过 this.$refs.el 去获取元素
            */
            // console.log(this.$refs.el);

            let {value:txt} = ev.target;
            this.$emit('addarr',{
                id:+new Date,
                txt,
                checked:false
            });
            ev.target.value = '';
        }
    }
}
</script>

