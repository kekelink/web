// 入口文件
// exports.foo=done=>{
//   console.log('task');
//   done() //标识任务完成
// }
// exports.default=done=>{
//   // default 默认任务  为自动执行
//   console.log('default')
//   done()
// }
// // 方式二 不推荐
// const gulp =require('gulp')
// gulp.task('bar',done=>{
//   console.log('bar');
//   done()
// })
// const {series,parallel} =require('gulp')
// const task1=done=>{
//   setTimeout(()=>{
//     console.log('task1')
//     done()
//   },1000)
// }
// const task2=done=>{
//   setTimeout(()=>{
//     console.log('task2')
//     done()
//   },1000)
// }
// const task3=done=>{
//   setTimeout(()=>{
//     console.log('task3')
//     done()
//   },1000)
// }
// exports.foo=series(task1,task2,task3)
// exports.build=parallel(task1,task2,task3)

// const {Transform} = require('stream')
// const fs =require('fs')
// exports.default=()=>{
//   // 读取文件
//   const read=fs.createReadStream('normalize.css')
//   // 文件写入流
//   const write =fs.createWriteStream('normalize.min.css')
//   // 文件转化流
//   const transform = new Transform({transform:(chunk,encoding,callback)=>{
//     //  读取的内容转字符串
//     const input =chunk.toString()
//     const output =input.replace(/\s+/g,'').replace(/\/\*.+?\*\//g,'')
    
//     callback(null,output)
//   }})
//   read.pipe(transform)
//   .pipe(write)

//   return read

// }

const {src,dest} =require('gulp')
exports.default=()=>{
  
}