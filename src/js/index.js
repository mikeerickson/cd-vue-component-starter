/* global module */

import HelloWorld from './HelloWorld.vue';
// import '!style-loader!css-loader!sass-loader!../sass/app.scss';

module.exports = function install (Vue) {
  Vue.component('hello-world', HelloWorld);
};
