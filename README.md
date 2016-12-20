# vue-svg-icon  
> a solution for multicolor svg icons in vue2
> [轻量的Vue2多色动态svg图标方案 中文版说明](#chineseversion)

##### v1.0.5
demo https://cenkai88.github.io/vue-svg-icon/demo/

## Usage
### 1. install
```
npm install vue-svg-icon --save-dev
```
### 2. configure
change the loader in webpack.conf.js (or webpack.base.conf.js)
```
{
    test:/\.svg$/,
    loader: 'xml-loader'
}
```
**make sure xml is the unique loader for svg files because vue will use 'url' to load pictures by default**
```
{
  test: /\.(png|jpe?g|gif)(\?.*)?$/, // Make sure no svg here!
  loader: 'url',
  query: {
      limit: 10000,
      name: utils.assetsPath('img/[name].[hash:7].[ext]')
  }
}
```

### 3. put your svg into node_modules/vue-svg-icon/svg

### 4. import vue-svg-icon in your main.js
```
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);  
Icon.inject('chameleon'); // the name of your svg pic
```
### 5. use the svg icon in your vue
```
<icon name="chameleon" :scale="20"></icon>
```

###Trouble Shooting
1. cannot find corresponding .svg file in vue-svg-icon/svg when you inject it in main.js, please keep the name in main.js and the filename exactly same.
```
[Vue warn]: Invalid prop: custom validator check failed for prop "name". 
```

## develop
download the package from git
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

##chineseVersion
### 1. 安装



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
