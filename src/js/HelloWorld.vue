<template>
    <div class="hello-world">
        <h1>Hello World From Component</h1>
        {{ currentTime() }}
    </div>
</template>

<script>
  export default {
    name: 'hello-world',
    props: [],
    data: function () {
      return {

      };
    },
    methods: {
      currentTime: function () {
        const options = {
          weekday: 'long', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
        };
        return new Date().toLocaleDateString('en-us', options);
      }
    }
  };
</script>

<style scoped lang="sass">
    // just some basic sass work here to make sure all is configured
    $font-family: 'Source Code Pro';
    .hello-world {
        padding: 10px;
        font-family: $font-family;
        background: lighten(yellow, 30%);
    }
</style>
