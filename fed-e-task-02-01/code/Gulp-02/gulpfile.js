const {src,dest,parallel,series,watch} =require('gulp')
const loadPlugins =require('gulp-load-plugins')
const plugins =loadPlugins()
const del =require('del')

const  imagemin =require('gulp-imagemin')
const  sass =require('gulp-sass')


const   browserSync= require('browser-sync')

const bs =browserSync.create()
const clean = ()=>{
  // 每次打包删除之前的文件
  return del(['dist'])
}

const style =()=>{
  // css
  return src('src/assets/styles/*.scss',{base:'src'})
  .pipe(sass({outputStyle:'expanded'}))
  .pipe(dest('dist'))
}
const data = {
  menus: [
    {
      name: 'Home',
      icon: 'aperture',
      link: 'index.html'
    },
    {
      name: 'Features',
      link: 'features.html'
    },
    {
      name: 'About',
      link: 'about.html'
    },
    {
      name: 'Contact',
      link: '#',
      children: [
        {
          name: 'Twitter',
          link: 'https://twitter.com/w_zce'
        },
        {
          name: 'About',
          link: 'https://weibo.com/zceme'
        },
        {
          name: 'divider'
        },
        {
          name: 'About',
          link: 'https://github.com/zce'
        }
      ]
    }
  ],
  pkg: require('./package.json'),
  date: new Date()
}
const script =()=>{
  // js es6 转 es5
  return src('src/assets/scripts/*.js',{base:'src'})
  .pipe(plugins.babel({presets:['@babel/preset-env']}))
  .pipe(dest('dist'))
}
const page =()=>{
  // html
  return src('src/**/*.html',{base:'src'})
  .pipe(plugins.swig({data}))
  .pipe(dest('dist'))
}
// img压缩
const image =()=>{
  // html
  return src('src/assets/images/**',{base:'src'})
  .pipe(imagemin())
  .pipe(dest('dist'))
}
// 字体压缩
const font =()=>{
  return src('scr/assets/fonts/**',{base:'src'})
  .pipe(imagemin())
  .pipe(dest('dist'))
}
// 其他文件 
const extra =()=>{
  return script('public/**',{base:'public'})
  .pipe(dest('dist'))
}
// 开启服务器
const serve =()=>{
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)
  bs.init({
    notify:false,
    post:2088,
    files:'dist/**',
    server:{
      baseDir: ['temp', 'src', 'public'],
      routes:{
        '/node_modules':'node_modules'
      }
    }
  })
}

// 把任务组合起来 
const compile =parallel(style,script,page)
const build = series(clean,parallel(compile,extra,font,image)) 
module.exports={
  
  build,
  serve
}