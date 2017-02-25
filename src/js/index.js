/* global module */

import Vue from 'vue';
import HelloWorld from './HelloWorld.vue';
// import '!style-loader!css-loader!sass-loader!../sass/app.scss';

function install (Vue) {
  Vue.component('hello-world', HelloWorld);
}
module.exports = install;

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install: install });
}
