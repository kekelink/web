#!/usr/bin/env node
// 必须要有特定的文件头

// 脚手架的工作过程：
// 1. 通过命令行交互询问用户问题
// 2. 根据用户回答的结果生成文件
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')
const ejs =require('ejs')
// 发起命令行询问prompt 接收数组[]
inquirer.prompt([
  {
    type:'input', // 类型
    name:'name',// 返回值的键
    message:'Project name?😌' //用户提示
  }
]).then(anwsers=>{
   // 根据用户回答的结果生成文件
  // 模板目录
  const tmplDir = path.join(__dirname, 'templates')
  // 目标目录
  const destDir = process.cwd()
  console.log(destDir);
  
  fs.readdir(tmplDir,(err,files)=>{
    if(err) throw err
    files.forEach(file=>{
      // 通过模版引擎渲染文件
      ejs.renderFile(path.join(tmplDir,file),anwsers,(err,result)=>{
        if(err) throw err
        // 将结果写入目标文件路径
        fs.writeFileSync(path.join(destDir,file),result)
      })
      
    })
  })
})