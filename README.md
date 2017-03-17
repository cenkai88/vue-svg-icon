# vue-svg-icon  
> a solution for multicolor svg icons in vue2
> [轻量的Vue2多色动态svg图标方案 中文版说明](#chineseversion)

##### v1.2.9

**demo:** https://cenkai88.github.io/vue-svg-icon/demo/  
**features:** 
- **no need to inject SVG in main.js anymore**
- support path, circle, ellipse, rect, line, polyline, polygon tag of SVG
- support grouped tags in SVG
- real-time svg editing in illustrator or sketch
- dynamically set the color of ONE PART of the svg through css 'color' property  
- **an awesome SVG icon site [iconfont](http://www.iconfont.cn)**

## Usage
### 1. install
```
npm install vue-svg-icon --save-dev
```
### 2. put your svg into src/svg/
- **this dir are not supported to be configured now**  
- **src folder should be in the same folder with node_modules**

### 3. import vue-svg-icon in your main.js
```
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon);  
```
### 4. use the svg icon in your vue!
```
<icon name="chameleon" :scale="20"></icon>
```

### Edit svg pictures in illustrator
- ~~Notice all the rect or line should be converted to path.~~(not anymore since v1.1.0)   
- When saving the SVG, please choose 'Save As' and set CSS Properties as 'Presentation Attributes' in advanced settings.
- Pls set the color of the part that can be changed through css as #000000 in illustrator，if you want to use black in SVG but don't want it to be altered by css, pls set it as #000001
- the color of stroke can be controlled through **stroke** property of icon if set as #000000 (since v1.1.0).
- recommended size of SVG is 200*200

### Trouble Shooting
1. cannot find corresponding .svg file in vue-svg-icon/svg when you inject it in main.js, please keep the name in main.js and the filename exactly same.
```
[Vue warn]: Invalid prop: custom validator check failed for prop "name". 
```
2. cannot find the "svg" fold in src folder
```
This dependency was not found:
   
   * !xml-loader!../../src/svg in ./~/.6.4.1@babel-loader/lib!./~/.11.1.4@vue-loader/lib/selector.js?type=script&index=0!./~/.1.2.8@vue-svg-icon/Icon.vue
   
   To install it, you can run: npm install --save !xml-loader!../../src/svg
```
3. pls check the .babelrc file of root folder
```
Module build failed: ReferenceError: Unknown plugin "transform-runtime"
 specified in "/Users/test/Desktop/Dev/github/.babelrc" at 0, attempted to resolve relative to 
 "/Users/test/Desktop/Dev/github"
```

## 中文版本说明
**示例:** https://cenkai88.github.io/vue-svg-icon/demo/  
**特点:** 
- **不再需要通过inject注册SVG**
- 支持SVG文件中path, circle, ellipse, rect, line, polyline, polygon 标签
- 支持SVG文件中存在编组的标签
- 可即时在illustrator中编辑svg图片
- 可通过css的color属性动态地调整svg中**某一部分**的颜色

### 1. 安装
```
npm install vue-svg-icon --save-dev
```

### 2. 将svg图片放入src/svg/
#### 这里安利一个svg图片库[iconfont](http://www.iconfont.cn/plus)
- src/svg路径暂时不可配置
- src文件夹应和node_modules在同一个文件夹下

### 3. 在项目的main.js入口引入vue-svg-icon
```
import Icon from 'vue-svg-icon/Icon.vue';
Vue.component('icon', Icon); 
```
### 4. 在网页中使用icon标签就可以啦！
```
<icon name="chameleon" scale="20"></icon>
```

### 在illustrator中编辑svg图片时
- ~~注意illustrator中所有的矩形线段等等需转成复合路径再保存。~~（v1.1.0后不再需要)
- 第一次编辑完保存时，请选择"另存为"，在"高级选项"中将"css属性"设置成**演示文稿属性**  
- 需要通过css动态设置颜色等部分请将填充色设为纯黑(#000000)，如果想设置黑色但不受SVG的color影响请将填充色设为(#000001)
- 描边的颜色同样可在illustrator或sketch中设为纯黑(#000000)，然后通过icon的CSS中**stroke**属性来动态控制 (自v1.1.0起)。
- 推荐SVG尺寸为200*200

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
