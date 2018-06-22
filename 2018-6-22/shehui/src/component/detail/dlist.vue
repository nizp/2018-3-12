<template>
    <div>
        <dl v-for="(val,key) in info">
            <dt>{{val.t}}</dt>
            <dd v-for="(val2,key2) in val.l">
                {{val2}}
            </dd>
        </dl>
    </div>
</template>
<script>
    export default {
        name:'List',
        props:{
            info:Array
        }
    }
</script>

<style scoped>

</style>