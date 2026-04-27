<script lang="ts">
    /**
     * Card Component - Svelte 5
     * Layout: Categoria (sopra, destra), Titolo (sinistra), Immagine (sotto)
     */
    let { 
        title, 
        image, 
        year, 
        category, 
        description, 
        variant = 'portfolio', 
        class: className = ''   
    } = $props();
</script>

<div class="card card-{variant} {className}">
    <div class="card-content">
        <div class="card-header">
            {#if category}
                <span class="card-category typography-h4-h5-semibold">{category}</span>
            {/if}
            
            <div class="title-group">
                <h3 class="card-title typography-h3-semibold">{title}</h3>
                {#if year}
                    <span class="card-year typography-h3-regular">{year}</span>
                {/if}
            </div>
        </div>

        {#if description && variant === 'design'}
            <p class="card-description typography-h4">{description}</p>
        {/if}
    </div>

    {#if image}
        <div class="image-container">
            <img src={image} alt={title} class="card-image" />
        </div>
    {/if}
</div>

<style>
    .card {
        display: flex;
        flex-direction: column;
        background-color: var(--color-background-primary);
        width: 100%;
    }

    .card-content {
        padding-bottom: var(--spacing-4);
        display: flex;
        flex-direction: column;
    }

    .card-header {
        display: flex;
        flex-direction: column; /* Incolonna categoria e titolo */
        width: 100%;
        margin-bottom: var(--spacing-4);
    }

    /* La scritta grigia sopra il titolo */
    .card-category {
        color: var(--color-content-secondary);
        text-transform: uppercase;
        text-align: right; /* Allineata in alto a destra */
        display: block;
        width: 100%;
        margin-bottom: 4px; /* Piccolo spazio prima del titolo */
    }

    .title-group {
        display: flex;
        align-items: baseline;
        gap: 8px;
        text-align: left;
    }

    .card-title {
        color: var(--color-content-primary);
        text-transform: uppercase;
        margin: 0;
    }

    .card-year {
        color: var(--color-content-primary);
    }

    .card-description {
        color: var(--color-content-primary);
        margin-top: var(--spacing-4);
        margin-bottom: var(--spacing-4);
        line-height: var(--line-height-h4-h5);
    }

    /* Gestione Immagine */
    .card-image {
        width: 100%;
        display: block;
        object-fit: cover;
    }

    .card-portfolio .card-image {
        aspect-ratio: 378 / 500;
    }

    .card-design .card-image {
        aspect-ratio: 664 / 401;
    }

    /* Utility per pulizia */
    h3, p {
        margin: 0;
    }
</style>