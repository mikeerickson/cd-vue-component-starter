/* global module, Vue */
/* Vue is loaded globally via page <script> tag */

import HelloWorld from './HelloWorld.vue';
import '!style-loader!css-loader!sass-loader!../sass/app.scss';

function install (Vue) {
  Vue.component('hello-world', HelloWorld);
}

if (typeof window !== 'undefined' && window.Vue) {
  Vue.use({ install });
}

module.exports = install;
