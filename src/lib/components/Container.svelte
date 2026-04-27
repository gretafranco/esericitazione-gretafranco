<script>
	/**
	 * Container Component using Design Tokens
	 * Provides consistent spacing and padding
	 */
	export let variant = 'section'; // 'section' | 'hero' | 'grid' | 'full'
	export let className = '';
	export let as = 'div';

	const tagMap = {
		div: 'div',
		section: 'section',
		main: 'main',
		article: 'article'
	};

	const tag = tagMap[as] || 'div';

	const variantClass = {
		section: 'container-section',
		hero: 'container-hero',
		grid: 'container-grid',
		full: 'container-full'
	}[variant] || 'container-section';
</script>

<svelte:element this={tag} class="{variantClass} {className}">
	<slot />
</svelte:element>

<style>
	:global(.container-section) {
		padding: var(--spacing-11) var(--spacing-9) var(--spacing-12);
		background-color: var(--color-background-primary);
		width: 100%;
	}

	:global(.container-hero) {
		height: 846px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-background-primary);
		overflow: hidden;
		width: 100%;
	}

	:global(.container-grid) {
		display: grid;
		gap: var(--spacing-8) var(--spacing-5);
		padding: var(--spacing-11) var(--spacing-9);
		background-color: var(--color-background-primary);
		width: 100%;
	}

	:global(.container-full) {
		width: 100%;
		background-color: var(--color-background-primary);
	}

	@media (max-width: 640px) {
		:global(.container-section) {
			padding: var(--spacing-12) var(--spacing-5);
		}

		:global(.container-grid) {
			padding: var(--spacing-11) var(--spacing-5);
		}
	}
</style>
