# vue-svg-icon  
> a solution for multicolor svg icons in vue2
> [轻量的Vue2多色动态svg图标方案 中文版说明](#chineseversion)

##### v1.0.6
**demo:** https://cenkai88.github.io/vue-svg-icon/demo/  
**features:** 
- real-time svg editing in illustrator  
- dynamically set the color of ONE PART of the svg through css 'color' property  

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
### 5. use the svg icon in your vue!
```
<icon name="chameleon" :scale="20"></icon>
```

### Edit svg pictures in illustrator
- Notice all the rect or line should be converted to path.   
- When saving the svg, please choose 'Save As' and set CSS Properties as 'Presentation Attributes' in advanced settings.
- pls set the color of the part that can be changed through css as #000000 in illustrator，if you want to use black in svg but don't want it to be altered by css, pls set it as #000001
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
**示例:** https://cenkai88.github.io/vue-svg-icon/demo/  
**特点:** 
- 可即时在illustrator中编辑svg图片
- 可通过css的color属性动态地调整svg中**某一部分**的颜色

### 1. 安装
```
npm install vue-svg-icon --save-dev
```
### 2. 配置
将webpack.conf.js(或webpack.base.conf.js)中svg格式文件的loader设置为xml-loader
```
{
    test:/\.svg$/,
    loader: 'xml-loader'
}
```
**请注意vue默认svg的loader是url，请在webpack.conf.js(或webpack.base.conf.js)中删掉**
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

### 3. 将svg图片放入node_modules/vue-svg-icon/svg
#####这里安利一个svg图片库[iconfont](http://www.iconfont.cn/plus)

### 4. 在项目的main.js入口引入vue-svg-icon和需要使用的svg文件名
```
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);  
Icon.inject('chameleon'); // the name of your svg pic
```
### 5. 在网页中使用icon标签就可以啦！
```
<icon name="chameleon" :scale="20"></icon>
```

### 在illustrator中编辑svg图片时
- 注意illustrator中所有的矩形线段等等需转成复合路径再保存。  
- 第一次编辑完保存时，请选择"另存为"，在"高级选项"中将"css属性"设置成**演示文稿属性**  
- 需要通过css动态设置颜色等部分请将填充色设为纯黑(#000000)，如果想设置黑色但不受svg的color影响请将填充色设为(#000001)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
