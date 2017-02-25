new Vue({
  el: '#app',
  components: {
    'hello-world': HelloWorld.default
  },
  mounted: () => {
    console.log('Vue App Init');
  }
});
