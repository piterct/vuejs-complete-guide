<template>
	<div id="app">
		<app-user />
	</div>
</template>

<script>
import AppUser from "./components/User.vue";

export default {
	name: "app",
	components: { AppUser }
}
</script>

<style>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 1.7rem;
}

h1, h2, p {
	margin: 10px;
	padding: 0px;
}

button {
	font-size: 1.5rem;
	padding: 5px 15px;
	border-radius: 4px;
	margin: 10px;
}
</style>
