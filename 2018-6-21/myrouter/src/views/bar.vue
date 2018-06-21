<template>
    <div>
        <h1>Bar</h1>
        这是第{{$route.params.id}}个组件
        {{arr}}
    </div>
</template>

<script>
export default {
    name:"Bar",
    beforeUpdate(){
        switch (this.$route.params.id) {
            case '1':
                    this.arr = [1,2,3]
                break;
            case '2':
                    this.arr = [4,5,6]
                break;
            default :
                this.arr = [1,2,3]
                break;
        }
    },
    created(){
        switch (this.$route.params.id) {
            case '1':
                    this.arr = [1,2,3]
                break;
            case '2':
                    this.arr = [4,5,6]
                break;
            default :
                this.arr = [1,2,3]
                break;
        }
    },
    data(){
        return {
            arr:[]
        }
    }
}
</script>

<style scoped>

</style>