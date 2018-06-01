// import {fn} from './2';
// import {nf as fn} from './2';
// import {fn,num} from './2';
import fn,{num} from './2';

import './css/1.css';

if(module.hot){
    module.hot.accept();
}


/*
    import 引入

    export 导出

*/
console.log(num);
console.log(fn() + 5 + 1);