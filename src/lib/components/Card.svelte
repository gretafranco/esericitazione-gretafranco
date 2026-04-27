<script>
	/**
	 * Card Component using Design Tokens
	 */
	export let title = '';
	export let year = '';
	export let image = '';
	export let description = '';
	export let category = '';
	export let variant = 'portfolio'; // 'portfolio' | 'design'
	export let className = '';
</script>

<div class={`card card-${variant} ${className}`}>
	{#if image}
		<img src={image} alt={title} class="card-image" />
	{/if}

	<div class="card-content">
		{#if variant === 'portfolio'}
			<div class="card-header">
				<h3 class="card-title">{title}</h3>
				{#if year}
					<span class="card-year">{year}</span>
				{/if}
			</div>
		{:else if variant === 'design'}
			{#if category}
				<span class="card-category">{category}</span>
			{/if}
			<h3 class="card-title">{title}</h3>
			{#if year}
				<p class="card-year">{year}</p>
			{/if}
			{#if description}
				<p class="card-description">{description}</p>
			{/if}
		{/if}
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		gap: 0;
		background-color: var(--color-background-primary);
	}

	.card-portfolio {
		gap: 10px;
	}

	.card-design {
		position: relative;
	}

	.card-image {
		width: 100%;
		object-fit: cover;
		background-color: #e0e0e0;
	}

	.card-portfolio .card-image {
		aspect-ratio: 378 / 500;
	}

	.card-design .card-image {
		aspect-ratio: 664 / 401;
	}

	.card-content {
		padding: var(--spacing-4) var(--spacing-5);
		position: relative;
		z-index: 2;
	}

	.card-design .card-content {
		background-color: var(--color-background-primary);
	}

	.card-header {
		display: flex;
		gap: 3px;
		align-items: center;
	}

	.card-title {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-semibold);
		color: var(--color-content-primary);
		margin: 0;
		margin-bottom: 6px;
	}

	.card-portfolio .card-title {
		margin-bottom: 0;
	}

	.card-year {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-regular);
		color: var(--color-content-primary);
	}

	.card-design .card-year {
		font-size: var(--font-size-h3);
		font-weight: var(--font-weight-regular);
		color: var(--color-content-primary);
		margin: 0 0 6px 0;
	}

	.card-category {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h4-h5);
		font-weight: var(--font-weight-semibold);
		color: var(--color-content-secondary);
		position: absolute;
		top: var(--spacing-4);
		right: var(--spacing-5);
	}

	.card-description {
		font-family: var(--font-family-primary);
		font-size: var(--font-size-h4);
		font-weight: var(--font-weight-regular);
		line-height: var(--line-height-h4-h5);
		color: var(--color-content-primary);
		margin: 0;
	}
</style>
