let t = {
    getChild(id){
        let childArr = [];
        for(let attr in data){
            if(data[attr].pid == id){
                childArr.push(data[attr]);
            }
        }
        //如果有子级就返回子级，没有返回null;
        if(childArr.length > 0){
            return childArr;
        }else{
            return null;
        }
    },
    //通过当前的id找到父级的数据
    getParent(id){
        /*
            如果有这个数据 并且 不是微云
            就把父级的数据返回出去

            否则 返回null
        */
        if(data[id] && data[id].pid != -1){
            /*
                data[3].pid  = 2

                data[2] = 我的音乐
            */
            return data[data[id].pid];
        }
        return null;
    },
    //根据当前的id找到所有的父级
    getParents(id){
        let parentsArr = [];
        let now = data[id]; //当前的id  3

        /*
            3 周杰伦

            [3 周杰伦,2 我的音乐,0 微云]

            now = 2 我的音乐

            now = 0 微云

        */
        // debugger;
        //只要有父级数据就一直会循环
        while(now){
            parentsArr.unshift(now);
            now = this.getParent(now.id);
        }
        return parentsArr;
    }
}