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

			}
		},
		methods: {
            currentTime: function() {
            	return new Date().toLocaleDateString();
            }
		},

	}
</script>

<style scoped lang="sass">
    .hello-world {

    }
</style>