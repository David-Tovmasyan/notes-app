<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<div class="app">
	<Header />

	<main class="bg-gradient-to-b from-emerald-100 to-emerald-200">
		<slot />
	</main>

</div>

<style>
	main{
		height: 100vh;
		width: 100vw;
	}

</style>
