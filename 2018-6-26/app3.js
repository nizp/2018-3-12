const fs = require('fs');

/*
    写文件
        写什么文件
        写什么内容
        回调
*/
// fs.writeFile('public/3.txt','hahehe',(err)=>{
//     if(err){console.log('写失败')}
// });

/*
    删除文件
        文件路径
        回调
*/

// fs.unlink('public/3.txt',function(error){
//     if(error){
//         console.log('失败');
//     }
// });

/*
    创建文件夹
        fs.mkdir
*/
fs.mkdir('public/js',function(error){
    if(error){
        console.log('失败');
    }
})