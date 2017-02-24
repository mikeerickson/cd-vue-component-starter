<template>
    <div class="hello-world">
        <h1>Current Time (Local Time)</h1>
        <div>{{ timestamp }}</div>
    </div>
</template>

<script>
  export default {
  	name: 'HelloWorld',
    props: [],
    data: function () {
      return {
      	timestamp: _currentTime()
      };
    },
    methods: {
    	currentTime: () => {
    		return _currentTime();
        },
        timer: function() {
        	setTimeout(() => {
            this.timestamp = this.currentTime();
            this.timer();
          }, 1000);
        }
    },
    mounted: function() {
      this.timer();
    }
  };

  function _currentTime() {
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
        border: 2px solid lighten(yellow, 30%);
        border-radius: 6px;
        text-align: center;
    }
</style>
