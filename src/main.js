// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Icon from 'vue-svg-icon';
Icon.inject('chameleon');
Icon.inject('settings');
Icon.inject('unlock');
Icon.inject('sun');
Icon.inject('cup');
Icon.inject('pie');
Icon.inject('settings2');
Icon.inject('roboAd');

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {App}
});
