<script>
	/**
	 * Button Component using Design Tokens
	 * Supports filter buttons and action buttons
	 */
	export let variant = 'default'; // 'default' | 'active'
	export let size = 'md'; // 'sm' | 'md' | 'lg'
	export let onClick = null;
	export let className = '';

	const sizeMap = {
		sm: 'py-1 px-3',
		md: 'py-1 px-5',
		lg: 'py-2 px-6'
	};

	const sizeClass = sizeMap[size] || sizeMap.md;
</script>

<button
	class={`button button-${variant} ${sizeClass} ${className}`}
	on:click={onClick}
>
	<slot />
</button>

<style>
	.button {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-semibold);
		border: none;
		border-radius: var(--radius-full);
		cursor: pointer;
		transition: all 0.3s ease;
		white-space: nowrap;
		padding: 6px 20px;
	}

	.button-default {
		background-color: transparent;
		color: var(--color-filter-text-default);
	}

	.button-default:hover {
		background-color: rgba(246, 57, 43, 0.1);
	}

	.button-active {
		background-color: var(--color-filter-background-selected);
		color: var(--color-filter-text-selected);
	}

	.button-active:hover {
		background-color: #d92512;
	}
</style>
