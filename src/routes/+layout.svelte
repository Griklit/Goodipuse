<script>
	import './styles.css';
</script>

<div class="app">
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/caesar">Caesar</a>
		<a href="/base64">Base64</a>
	</nav>
	<main>
		<slot />
	</main>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		height: 100vh;
		width: 100vw;
	}
</style>
