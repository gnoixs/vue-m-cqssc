# vue-mobile-cqssc

> This project is mobile cqssc by vue.js

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

#### 项目设计（project design）
 
```bash
# init 
vue init webpack vue-m-cqssc
cd vue-m-cqssc && npm install

# add to git repository
git init
git add -A
git commit -m "init project"
git remote add origin https://github.com/gnoixs/vue-m-cqssc.git
git push -u origin master

# use sass
npm install sass-loader --save-dev   //make sure <style lang="sass/scss">
npm install node-sass --save-dev     // sass don't use "{}" and ";"

# run project
npm run dev

# package into production environment
npm run build
```


#### 项目结构（project structures）
```bash
[vue-m-cqssc]
      ├── build
      ├── configs
      ├── node_modules
      ├── src
      │    ├── api           // interface from backend
      │    ├── base          // base components
      │    ├── assets        // common static rosource
      │    │    ├── fonts       // fonts files
      │    │    ├── images      // images files
      │    │    ├── js          // javascript files
      │    │    └── styles      // css files
      │    ├── components    // pages
      │    ├── router        // routers
      │    ├── stroe         // vuex
      │    ├── App.vue       // App component
      │    └── main.js       // entry
      ├── static
      ├── .babelrc
      ├── .editorconfig
      ├── .gitignore
      ├── .postcssrc.js
      ├── index.html
      ├── package.json
      └── README.md
```

#### 配置viewport属性（configurate viewport attribute）
```bash
# index.html
<meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no">
```

#### 适配移动端（adapt mobile)
```bash
  zoom(){
      let w = window.innerWidth;
      let body = document.body;
      body.style.zoom = w / 640;
  }
  
  # main.js
  mounted(){
    this.zoom();
    window.addEventListener('resize',this.zoom);
  }
```
#### 引用fastclick解决移动端点击延迟300ms问题
```bash
  npm install fastclick --save-dev
  
  # main.js
  import fastclick from 'fastclick'
  fastclick.attach(document.body)
```

#### 引用vue-lazyload插件，实现图片的懒加载
```bash
  npm install vue-lazyload --save-dev
  
  #main.js
  import VueLazyload from 'vue-lazyload'
  Vue.use(VueLazyload,{
    loading: require('@/assets/images/default.png')
  })
  
  # on pages
  v-lazy="@/assets/images/xxx.png"
```
#### resolve路由按需加载
```bash
  const Intro = (resolve) => {
    import('@/components/Intro').then((module) => {
      resolve(module);
    })
  }
```

#### babel-polyfill用于实现浏览器不支持原生功能
```bash
  npm install babel-polyfill --save-dev
  
  # main.js
  import 'babel-polyfill' // 最好放在前面
```
#### 使用vue-awesome-swiper
```bash
  npm install vue-awesome-swiper --save-dev
  
  # main.js
  import VueAwesomeSwiper from 'vue-awesome-swiper'
  Vue.use(VueAwesomeSwiper);
  
  # on pages
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    components: {
      swiper,
      swiperSlide
    }
  }
```


