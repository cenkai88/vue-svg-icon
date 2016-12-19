// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Icon from './components/Icon.vue';
Icon.inject('cup');
Icon.inject('octopus');
Icon.inject('chameleon');

Vue.component('icon', Icon);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});
