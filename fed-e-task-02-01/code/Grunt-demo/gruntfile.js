
const sass = require('sass')
const loadGruntTasks = require('load-grunt-tasks')
module.exports=grunt=>{
    //定义路径变量
    var path = {
      tmp: '.src',                        //临时目录
      dest: '.dist',                   //发布目录
      web: ''  //项目站点
  };
  grunt.initConfig({
   
    sass: {
      options: {
       
        implementation: sass
      },
      main: {
        files: [
          {
          
            // 启用动态扩展
            expand: true,
            // css文件源的文件夹
            cwd: 'src/assets/styles/',
            // 匹配规则
            src: '*.scss',
            // 导出css和sprite的路径地址
            dest: 'dist/assets/styles/',
           
     
       },
       
        ]
     }
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ['@babel/preset-env']
      },
      main: {
        files: {
          'dist/assets/scripts/main.js': 'src/assets/scripts/main.js'
        }
      }
    },
    
    watch: {
      js: {
        files: ['src/assets/scripts/*.js'],
        tasks: ['babel']
      },
      css: {
        files: ['src/assets/styles/*.scss'],
        tasks: ['sass']
      }
    }
  })
  // grunt.loadNpmTasks('grunt-contrib-sass');
  loadGruntTasks(grunt) // 自动加载所有的 grunt 插件中的任务
  
  grunt.registerTask('default', ['sass','babel','watch' ])

}