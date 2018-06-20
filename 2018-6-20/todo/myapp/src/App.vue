<template>
  <div>
    <section class="todoapp">
        <div>
            <myheader 
              @addarr="addarr"
            ></myheader>
            <section class="main">
                <input 
                  class="toggle-all" 
                  type="checkbox"
                  :checked="all"
                  @click="changall"
                />
                <List :dd="newArr" @delefn="deleFn"></List>
                
            </section>
            <MFooter :num="num" @cafn="caFn"></MFooter>
        </div>
    </section>
  </div>
</template>

<script>
import Myheader from './components/myheader'
import List from './components/List'
import MFooter from './components/footer'
import './assets/css/index.css';

export default {
  name: 'app',
  data(){
    return {
      arr:[
        {id:0,checked:false,txt:'哈哈'},
        {id:1,checked:false,txt:'哗哗'}
      ],
      checkedall:'all'
    }
  },
  components: {
    Myheader,
    List,
    MFooter
  },
  methods:{
    //添加数据
    addarr(newData){
      this.arr.unshift(newData);
    },
    //控制全选
    changall(ev){
      this.arr.forEach(e=>{
        e.checked = ev.target.checked
      });
    },  
    //删除数据
    deleFn(id){
      this.arr = this.arr.filter(e=>e.id!=id);
    },
    //修改全部、未完成、已完成状态
    caFn(newAll){
      this.checkedall = newAll;
    }
  },
  computed:{
    all(){
      return this.arr.length?this.arr.every(e=>e.checked):false;
    },
    //监听this.arr,当它发生变化的时候执行num
    num(){
      return this.arr.filter(e=>!e.checked).length;
    },
    //监听checkedall，当它发生变化的时候执行newArr
    newArr(){
      return this.arr.filter(e=>{
        switch (this.checkedall) {
          case 'all':
              return e;
            break;
          case 'active':
              return !e.checked;
            break;
          case 'completed':
              return e.checked;
            break;
          default:
            return e;
            break;
        }
      });
    }
  }
}
</script>


