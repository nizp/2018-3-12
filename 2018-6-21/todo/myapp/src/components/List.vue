<template >
    
    <ul class="todo-list">     
        <li 
            :class="dbclass(val.checked,val.editing)" 
            v-for="(val,key) in aa"
        >
            <div class="view">
                <input 
                    class="toggle" 
                    type="checkbox" 
                    v-model="val.checked"
                >
                <label 
                    @dblclick="db(val.id,val.txt,$event)"
                >{{val.txt}}</label>
                <button 
                    class="destroy"
                    @click="dele(val.id)"
                ></button>
            </div>
            <input
                class="edit" 
                v-model="parentVal"
                @blur="blur(val.id,val.txt)"
                @keyup.13="blur(val.id,val.txt)"
            >
        </li>
     </ul>
</template>
<script>
export default {
    name:'List',
    props:{
        aa:Array
    },
    data(){
        return {
            parentVal:''
        } 
    },
    methods:{
        
        dele(id){
            this.$emit('delefn',id);
        },
        db(id,val,ev){
          
           this.$emit('pdb',id,true);
           this.parentVal = val;
           setTimeout(() => {
               ev.target.parentNode.nextElementSibling.focus();
           });
        },
        dbclass(checked,editing){
            let sClass = '';
            sClass = checked?'completed':'';
            if(editing){
                sClass = sClass + ' editing'
            }
            return sClass;
        },
        blur(id,val){
            //操作老爹的数据
            if(this.parentVal && val!=this.parentVal){
                this.$emit('cval',id,this.parentVal);
            }else{
                this.$emit('pdb',id,false);
            }
            
        }
    }
}
</script>