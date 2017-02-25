new Vue({
  el: '#app',
  components: {
    'hello-world': HelloWorld.HelloWorld
  },
  mounted: () => {
    console.log('Vue App Init');
  }
});
