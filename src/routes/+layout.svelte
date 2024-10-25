<script>
	import '../app.css';
	import Header from "../ui/Header.svelte";
</script>

<div class="app">
	<div class="app_container">
		<Header/>

		<main class="bg-gradient-to-b from-emerald-100 to-emerald-200">
			<slot />
		</main>
	</div>
</div>

<style>
	.app_container{
		display: grid;
		grid-template-rows: 3rem 1fr;
		min-height: 100vh;
		height: 100%;
	}
</style>
