<template>
	<div id="app">
		<span>
			<button class="red">Load Red Component</button>
			<button class="green">Load Green Component</button>
			<button class="blue">Load Blue Component</button>
		</span>
		
		<Red />
		<Green />
		<Blue />
	</div>
</template>

<script>
import Red from './components/Red.vue'
import Green from './components/Green.vue'
import Blue from './components/Blue.vue'

export default {
	name: 'app',
	components: { Red, Green, Blue },
}
</script>

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}

	button {
		padding: 10px;
		color: #FFF;
		font-size: 1.3rem;
	}

    .box {
        color: #FFF;
        font-size: 1.8rem;
        padding: 25px;
		margin: 10px 0px;
    }

	.red {
        border: 2px solid red;
        background-color: #f54235;
    }

	.green {
        border: 2px solid green;
        background-color: #49b057;
    }

	.blue {
        border: 2px solid blue;
        background-color: #2594f0;
    }
</style>
