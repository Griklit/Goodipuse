<script>
	import './styles.css';
</script>

<div class="app">
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
