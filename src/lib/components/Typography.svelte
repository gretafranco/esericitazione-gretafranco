<script>
	/**
	 * Typography Components using Design Tokens
	 */
	export let level = 'h3';
	export let variant = 'regular';
	export let className = '';
	export let as = 'div';

	const tagMap = {
		h1: 'h1',
		h2: 'h2',
		h3: 'h3',
		h4: 'h4',
		h5: 'h5',
		p: 'p',
		span: 'span'
	};

	const tag = tagMap[as] || as;

	const typeStyles = {
		h3: {
			regular: 'typography-h3-regular',
			semibold: 'typography-h3-semibold'
		},
		h2: {
			medium: 'typography-h2'
		},
		h4: {
			regular: 'typography-h4'
		},
		h4h5: {
			regular: 'typography-h4-h5-regular',
			semibold: 'typography-h4-h5-semibold'
		},
		citazione: {
			desktop: 'typography-citazione-desktop'
		}
	};

	let typeClass = '';
	if (typeStyles[level]?.[variant]) {
		typeClass = typeStyles[level][variant];
	}
</script>

<svelte:element
	this={tag}
	class="{typeClass} {className}"
>
	<slot />
</svelte:element>

<style>
	:global(.typography-h3-regular) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-regular);
		line-height: 100%;
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-h3-semibold) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-semibold);
		line-height: 100%;
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-h2) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h2);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-h2);
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-h4) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h4);
		font-weight: var(--font-weight-regular);
		line-height: var(--line-height-h4-h5);
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-h4-h5-regular) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h4-h5);
		font-weight: var(--font-weight-regular);
		line-height: var(--spacing-4);
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-h4-h5-semibold) {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h4-h5);
		font-weight: var(--font-weight-semibold);
		line-height: 100%;
		letter-spacing: var(--letter-spacing-default);
	}

	:global(.typography-citazione-desktop) {
		font-family: var(--font-family-font1);
		font-size: var(--font-size-citazione-desktop);
		font-weight: var(--font-weight-medium);
		line-height: var(--line-height-citazione-desktop);
		letter-spacing: var(--letter-spacing-default);
	}
</style>
