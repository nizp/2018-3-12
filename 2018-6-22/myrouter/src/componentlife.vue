<template>
    <div id="app">
        <button @click="++num">按钮</button>
        {{num}}
    </div>
</template>

<script>
    export default {
        name:"App",
        data(){
            return {
                num:0
            }
        },
        beforeCreate(){
            console.log('初始化之前'); //挂loading
        },
        created(){
            console.log('初始化之后'); //请求数据
        },
        beforeMount(){
            console.log('数据是修改了,组件挂载之前');
        },
        mounted(){
            //关loading
            console.log('dom重新渲染之后');
        },
        //上面的钩子只执行一次

        beforeUpdate(){
            console.log('数据在修改的时候');
        },
        updated(){
            console.log('对比渲染之后');
        }
    }
</script>

<style scoped>

</style>