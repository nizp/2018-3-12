<template >
    <ul class="todo-list">      
        <li :class="val.checked?'completed':''" v-for="(val,key) in dd">
            <div class="view">
                <input 
                    class="toggle" 
                    type="checkbox" 
                    v-model="val.checked"
                >
                <label>{{val.txt}}</label>
                <button 
                    class="destroy"
                    @click="dele(val.id)"
                ></button>
            </div>
            <!-- <input class="edit" :value="val.txt"> -->
        </li>
     </ul>
</template>
<script>
export default {
    name:'List',
    props:{
        dd:Array,
        delefn:Function
    },
    methods:{
        dele(id){
            this.$emit('delefn',id);
        }
    }
}
</script>