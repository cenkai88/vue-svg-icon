<template>
  <div id="app">
    <h3>a simple solution for multicolor svg icon in Vue2.0</h3>
    <div id="svg-icon-logo">
      <icon name="chameleon" :scale="35"></icon>
    </div>
    <div id="container">
      <section>
        <h4>simple usage</h4>
        <span><icon name="chameleon" scale="20" style="color: #05CE7C;"></icon></span>
        <code>
          <pre><strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"chameleon"</span> <span class="attr">scale</span>=<span
              class="val">"20"</span> <span
              class="attr">style</span>=<span class="val">"color: #05CE7C;"</span>>&lt;/icon></pre>
        </code>
      </section>
      <section>
        <h4>spin</h4>
        <span><icon name="sun" scale="20" spin></icon></span>
        <code>
          <pre><strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"sun"</span> <span class="attr">scale</span>=<span
              class="val">"20"</span> <span class="attr">spin</span>>&lt;/icon></pre>
        </code>
      </section>
      <section>
        <h4>hover to change</h4>
        <span><icon name="settings" scale="20" id="hover"></icon></span>
        <code>
          <pre><strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"settings"</span> <span class="attr">scale</span>=<span
              class="val">"20"</span> <span
              class="attr">id</span>=<span class="val">"hover"</span>>&lt;/icon>
<strong>css3:</strong>
#hover:hover {
    <span class="attr">color</span>:<span class="val">gold</span>
}</pre>
        </code>
      </section>
      <section>
        <h4>click to change</h4>
        <span><icon name="unlock" scale="20" id="click"></icon></span>
        <code>
          <pre><strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"unlock"</span> <span class="attr">scale</span>="20" <span
              class="attr">id</span>=<span class="val">"click"</span>>&lt;/icon>
<strong>css3:</strong>
#click:active {
    <span class="attr">color</span>:<span class="val">white</span>
}</pre>
        </code>
      </section>
      <section>
        <h4>animation</h4>
        <span><icon name="chameleon" scale="20" id="animation"></icon></span>
        <code>
          <pre><strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"chameleon"</span> <span class="attr">scale</span>=<span
              class="val">"20"</span> <span class="attr">id</span>=<span class="val">"animation"</span>>&lt;/icon>
<strong>css3:</strong>
#animation {
  <span class="attr">animation</span>: <span class="val">changeColor 5s infinite step-end</span>;
}
@keyframes changeColor {
  0% {
      <span class="attr">color</span>: <span class="val">red</span>;
  }
  20% {
      <span class="attr">color</span>: <span class="val">yellow</span>;
  }
  40% {
      <span class="attr">color</span>: <span class="val">blue</span>;
  }
  60% {
      <span class="attr">color</span>: <span class="val">green</span>;
  }
  80% {
      <span class="attr">color</span>: <span class="val">purple</span>;
  }
  100% {
      <span class="attr">color</span>: <span class="val">gold</span>;
  }
}</pre>
        </code>
      </section>
      <section>
        <h4>advanced usage (tabbar)</h4>
        <div id="advanced">
          <div>
            <div>
              <icon name="roboAd" scale="12" index="0" :currentIndex="current"
                    @click.native="switchTo(0)"></icon>
              <div>btn1</div>
            </div>
            <div>
              <icon name="pie" scale="12" index="1" :currentIndex="current"
                    @click.native="switchTo(1)"></icon>
              <div>btn2</div>
            </div>
            <div>
              <icon name="cup" scale="12" index="2" :currentIndex="current"
                    @click.native="switchTo(2)"></icon>
              <div>btn3</div>
            </div>
            <div>
              <icon name="settings2" scale="12" index="3" :currentIndex="current"
                    @click.native="switchTo(3)"></icon>
              <div>btn4</div>
            </div>
          </div>
        </div>
        <code id="adCode"><pre><strong>pseudocode:</strong>
<strong>html:</strong>
&lt;icon <span class="attr">name</span>=<span class="val">"roboAd"</span> <span class="attr">scale</span>=<span class="val">"12"</span> <span class="attr">index</span>=<span class="val">"0"</span> <span class="attr">:currentIndex</span>=<span class="val">"current"</span> <span class="attr">@click.native</span>=<span class="val">"switchTo(0)"</span>>&lt;/icon>
&lt;div>btn1&lt;/div>
<strong>css:</strong>
.active {
  <span class="attr">color</span>: <span class="val">gold</span>;
}
svg {
  <span class="attr">color</span>: <span class="val">#fff</span>;
  <span class="attr">padding</span>: <span class="val">5px 0 2px</span>;
}
<strong>js:</strong>
data (){
  return {
    current: "0"
  }
},
methods: {
  switchTo(index){
    this.current = index.toString();
  }
}
          </pre>
        </code>
      </section>
    </div>
  </div>
</template>

<script>
  import {warn} from 'util'
  export default {
    name: 'app',
    components: {},
    data (){
      return {
        current: "0"
      }
    },
    methods: {
      switchTo(index){
        this.current = index.toString();
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  #svg-icon-logo, #animation {
    animation: changeColor 5s infinite linear;
  }

  @keyframes changeColor {
    0% {
      color: red;
    }
    20% {
      color: yellow;
    }
    40% {
      color: blue;
    }
    60% {
      color: green;
    }
    80% {
      color: purple;
    }
    100% {
      color: red;
    }
  }

  code {
    color: #2973b7;
    strong {
      color: #111;
    }
    width: 85%;
    border-radius: 3px;
    margin-left: 15px;
    padding: 4px 10px;
    background: #eee;
    line-height: 20px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
  }

  #container {
    text-align: left;
    padding-left: 5%;
    section {
      display: flex;
      flex-wrap: wrap;
      margin: 20px 0;
      h4 {
        width: 100%;
      }
      .attr {
        color: #e96900;
      }
      .val {
        color: #42b983;
      }
      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 48px;
        width: 48px;
        border: 1px solid #888;
        border-radius: 4px;
        svg {
          color: #05CE7C;
        }
      }
      #hover {
        color: grey;
      }
      #hover:hover {
        color: gold;
      }
      #click {
        color: #424242;
      }
      #click:active {
        color: white;
      }
      #advanced {
        height: 400px;
        width: 240px;
        border: 1px solid #ddd;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        .active {
          color: gold;
        }
        > div {
          width: 100%;
          display: flex;
          justify-content: space-around;
          border-top: 1px solid #ddd;
          text-align: center;
          > div {
            > svg {
              color: #fff;
              padding: 5px 0 2px;
            }
            > div {
              color: #333;
              line-height: 12px;
              font-size: 12px;
              padding: 2px;
            }
          }
        }
      }
      #adCode {
        width: calc(85% - 192px);
      }
    }
  }
</style>
