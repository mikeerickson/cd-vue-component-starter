/* global messenger */

new Vue({
  el: '#app',
  mounted: function () {
    // messenger loaded in index.html via <script> tag
    messenger.success('  === Component Mounted ===  ');
  }
});
