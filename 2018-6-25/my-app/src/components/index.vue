<template>
    <div>

        <select v-model="selected">
            <option value ="北京">北京</option>
            <option value ="上海">上海</option>
            <option value="广州">广州</option>
            <option value="杭州">杭州</option>
        </select>
        男:<input type="radio" v-model="sex" value="男"/>
        女:<input type="radio" v-model="sex" value="女" />
        <button @click="fn">提交</button>  
        <button @click="dele">退出</button>  

        <br />

        <table v-show="name">
            <tr>
                <td>名字:</td>
                <td>性别:</td>
                <td>地区:</td>
            </tr>
            <tr>
                <td>{{name}}</td>
                <td>{{sex}}</td>
                <td>{{selected}}</td>
            </tr>
        </table>   
    </div>
</template>

<script>
function getData(){
    let name = localStorage.getItem('name');
    let data = JSON.parse(localStorage.getItem('data'));
    let initData = {
        sex:'',
        selected:'',
        name:''
    }
    
    if(data){
       initData = data[name] ? data[name] : initData
    }
   
    return initData;
}

export default {
    name:'Index',
    data(){
        return {
            ...getData()
        }
    },
    methods:{
        fn(){
            let {sex,selected} = this;
            this.name = this.$store.state.name
            this.$store.commit('submit',{sex,selected,name:this.name});
        },
        dele(){
            this.$store.commit('deleName');
            this.$router.push({path:'/'});
        }
    }
}


</script>