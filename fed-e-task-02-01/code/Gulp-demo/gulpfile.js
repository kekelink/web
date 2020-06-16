// 实现这个项目的构建任务
const {src,dest,parallel,series,watch} =require('gulp')
const del = require('del')
const browserSync = require('browser-sync')
const  sass =require('gulp-sass')
const loadPlugins = require('gulp-load-plugins')
//  自动加载插件
const plugins = loadPlugins()
//  启动服务插件
const bs = browserSync.create()

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

// css
const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src' })
    .pipe(plugins.sass({ outputStyle: 'expanded' }))
    .pipe(dest('temp'))
    .pipe(bs.reload({ stream: true }))
}
// js
const script =()=>{
  return src('src/assets/scripts/*.js',{base:'src'}) 
  .pipe(plugins.babel({presets:['@babel/preset-env']}))
  .pipe(dest('temp'))
  .pipe(bs.reload({ stream: true }))
}
const page =()=>{
  return src('src/*.html', { base: 'src' })
  .pipe(plugins.swig({ data, defaults: { cache: false } }))
  .pipe(dest('temp'))
  .pipe(bs.reload({ stream: true }))
}


// 
const image = () => {
  return src('src/assets/images/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const font = () => {
  return src('src/assets/fonts/**', { base: 'src' })
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', { base: 'public' })
    .pipe(dest('dist'))
}

// 清除
const clean = () => {
  return del(['dist', 'temp'])
}

const serve = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
 
  watch([
    'src/assets/images/**',
    'src/assets/fonts/**',
    'public/**'
  ], bs.reload)

  bs.init({
    notify: false,
    port: 2080,
    
  
    server: {
      baseDir: ['temp', 'src', 'public'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}
// 解析HTML文件中特殊标签里面的script或style标签，合并成一个script或css文件，并替换。
const useref = () => {
  return src('temp/*.html', { base: 'temp' })
    .pipe(plugins.useref({ searchPath: ['temp', '.'] }))
    // html js css
    .pipe(plugins.if(/\.js$/, plugins.uglify()))
    .pipe(plugins.if(/\.css$/, plugins.cleanCss()))
    .pipe(plugins.if(/\.html$/, plugins.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    })))
    .pipe(dest('dist'))
}
const compile = parallel(style, script, page)

const build =  series(
  clean,
  parallel(
    series(compile, useref),
    image,
    font,
    extra
  )
)

const deploy = series(compile, serve)

module.exports = {
  serve,
  clean,
  build,
  deploy
}
