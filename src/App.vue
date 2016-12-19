<template>
  <div id="app">
    <h3>a simple solution for multicolor svg icon in Vue</h3>
    <div id="svg-icon-logo">
      <icon slot="icon" name="cup" :scale="20" class="spin"></icon>
    </div>
    <div id="container">
      <section>
        <h4>simple usage</h4>
        <icon slot="icon" name="cup" :scale="20" style="color: blue;"></icon>
        <code>
          <pre><strong>html:</strong>
&lt;icon slot="icon" name="cup" :scale="20" style="color: blue;">&lt;/icon></pre>
        </code>
      </section>
      <section>
        <h4>hover to change</h4>
        <icon slot="icon" name="cup" :scale="20" id="hover"></icon>
        <code>
          <pre><strong>html:</strong>
&lt;icon slot="icon" name="cup" :scale="20" id="hover">&lt;/icon>
<strong>css3:</strong>
#hover:hover {
    color:gold
}</pre>
        </code>
      </section>
      <section>
        <h4>click to change</h4>
        <icon slot="icon" name="octopus" :scale="20" id="click"></icon>
        <code>
          <pre><strong>html:</strong>
&lt;icon slot="icon" name="octopus" :scale="20" id="click">&lt;/icon>
<strong>css3:</strong>
#click:active {
    color:white
}</pre>
        </code>
      </section>
      <section>
        <h4>animation</h4>
        <icon slot="icon" name="chameleon" :scale="20" id="animation"></icon>
        <code>
          <pre><strong>html:</strong>
&lt;icon slot="icon" name="chameleon" :scale="20" id="animation">&lt;/icon>
<strong>css3:</strong>
#animation {
    animation: changeColor 5s infinite step-end;
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
        color: gold;
    }
}</pre>
        </code>
      </section>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app',
    components: {}
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
      svg {
        padding: 5px;
        border: 1px solid #888;
        border-radius: 4px;
      }
      code {
        width: 90%;
        border-radius: 3px;
        margin-left: 15px;
        padding: 4px 10px;
        background: #eee;
        line-height: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.125);
      }
      #hover:hover {
        color: gold;
      }
      #click:active {
        color: white;
      }
    }
  }
</style>
