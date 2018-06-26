const fs = require('fs');

// fs.readFile('public/2.txt',(error,data)=>{
//     if(error){
//         //找不到文件
//         console.log(error)
//     }else{
//         console.log(data.toString());
//     }
// });

try {
    const data = fs.readFileSync('public/2.txt');
} catch (error) {
    console.log(404);
}