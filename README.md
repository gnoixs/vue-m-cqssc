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

####
