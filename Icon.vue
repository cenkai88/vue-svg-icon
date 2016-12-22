<template>
  <svg version="1.1" :class="clazz" :role="label ? 'img' : 'presentation'" :aria-label="label" :width="width"
       :height="height" :viewBox="box" :style="style">
    <path :d="path.d" :fill="path.fill" v-for="path in icon.paths"/>
  </svg>
</template>

<style>
  .svg-icon {
    display: inline-block;
    fill: currentColor;
  }

  .svg-icon.flip-horizontal {
    transform: scale(-1, 1);
  }

  .svg-icon.flip-vertical {
    transform: scale(1, -1);
  }

  .svg-icon.spin {
    animation: fa-spin 1s 0s infinite linear;
  }

  @keyframes fa-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>

<script>
  import {warn} from 'util'

  let icons = {};

  export default {
    props: {
      name: {
        type: String,
        required: true,
        validator: function (val) {
          return val in icons
        }
      },
      scale: [Number, String],
      spin: Boolean,
      flip: {
        validator: function (val) {
          return val === 'horizontal' || val === 'vertical'
        }
      },
      label: String,
      index: String,
      currentIndex: String
    },
    computed: {
      normalizedScale() {
        let scale = this.scale
        scale = typeof scale === 'undefined' ? 1 : Number(scale);
        if (isNaN(scale) || scale <= 0) {
          warn(`Invalid prop: prop "scale" should be a number over 0.`, this);
          return 1
        }
        return scale
      },
      clazz() {
        return {
          'svg-icon': true,
          spin: this.spin,
          'flip-horizontal': this.flip === 'horizontal',
          'flip-vertical': this.flip === 'vertical',
          active: this.index === this.currentIndex
        }
      },
      icon() {
        if (icons[this.name].paths && Array.isArray(icons[this.name].paths)) {
          return icons[this.name]
        }
        else {
          icons[this.name].paths = [{"d": icons[this.name].d}];
          return icons[this.name]
        }
      },
      box() {
        return `0 0 ${this.icon.width} ${this.icon.height}`
      },
      width() {
        return this.icon.width / 112 * this.normalizedScale
      },
      height() {
        return this.icon.height / 112 * this.normalizedScale
      },
      style() {
        if (this.normalizedScale === 1) {
          return false
        }
        return {
          fontSize: this.normalizedScale + 'em'
        }
      }
    },
    inject: function (svgFile) {
      let xml = require(`!xml-loader!../../src/svg/${svgFile}.svg`);
      icons[svgFile] = xml.svg.$;
      icons[svgFile].width = 200;
      icons[svgFile].height = 200;
      icons[svgFile].paths = [];
      // deal with the illustrator generated svg
      if (xml.svg.g && !xml.svg.path) xml.svg.path = xml.svg.g[0].path;
      for (let i = 0, max = xml.svg.path.length; i < max; i++) {
        icons[svgFile].paths.push(xml.svg.path[i].$);
      }
    },
    icons
  }
</script>
