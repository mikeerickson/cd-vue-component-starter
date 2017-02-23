<template>
    <div class="hello-world">
        <h1>Hello World From Component</h1>
        <span class="timer"></span>
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

    },
    mounted: function() {
      startTime();
    }
  };

  function currentTime() {
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    return new Date().toLocaleDateString('en-us', options);
  }

  function startTime() {
    document.querySelector('.timer').innerHTML = currentTime();
    setTimeout(startTime, 1000);
  }

</script>

<style scoped lang="sass">
    // just some basic sass work here to make sure all is configured
    $font-family: 'Source Code Pro';
    $font-size:   36px;
    .hello-world {
        padding-left: 10px;
        padding-bottom: 10px;
        font-family: $font-family;
        font-size: $font-size;
        border: 1px solid lighten(yellow, 10%);
        border-radius: 6px;
        text-align: center;
    }
</style>
