<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../lib/tokens.css';

	let { children } = $props();

</script>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		background-color: #fafafa;
		font-family: var(--font-family-primary);
		color: #202426;
	}

	:global(#svelte) {
		width: 100%;
		height: 100%;
	}

	:global(*) {
		box-sizing: border-box;
	}
</style>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/jdu7rfe.css" />
	<link rel="icon" href={favicon} />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

{@render children()}
