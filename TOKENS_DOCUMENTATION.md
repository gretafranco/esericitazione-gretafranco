# Design Tokens - Gaetano Pesce Portfolio

Questo documento descrive i design token e i componenti Svelte disponibili nel progetto.

## Token CSS

I token CSS sono definiti in `src/lib/tokens.css` e sono disponibili come variabili CSS globali.

### Colori (Colors)

```css
/* Content Colors */
--color-content-primary: #202426        /* Colore testo principale */
--color-content-secondary: #7d8e93      /* Colore testo secondario */

/* Background Colors */
--color-background-primary: #fafafa     /* Sfondo principale */
--color-background-secondary: #ebeeef   /* Sfondo secondario */

/* Link Colors */
--color-link-default: #202426           /* Colore link default */

/* Filter Colors */
--color-filter-background-selected: #f6392b   /* Sfondo filtro selezionato */
--color-filter-text-selected: #fafafa         /* Testo filtro selezionato */
--color-filter-text-default: #202426          /* Testo filtro default */

/* Accent Colors */
--color-accent-primary: #f6392b         /* Colore accent primario */
--color-sunset: transparent             /* Colore sunset (vuoto) */
```

### Spaziatura (Spacing)

```css
--spacing-0: 0px       /* 0 */
--spacing-4: 16px      /* 16 */
--spacing-5: 24px      /* 24 */
--spacing-7: 40px      /* 40 */
--spacing-8: 56px      /* 56 */
--spacing-9: 72px      /* 72 */
--spacing-11: 160px    /* 160 */
--spacing-12: 80px     /* 80 */
```

### Raggi (Radius)

```css
--radius-none: 0px     /* No radius */
--radius-m: 16px       /* Medium radius */
--radius-full: 999px   /* Full/pill radius */
```

### Unità

```css
--unit-48: 48px        /* Unit 48px */
```

### Tipografia (Typography)

#### Font Families
```css
--font-family-primary: 'Degular Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
--font-family-font1: 'Degular Display', sans-serif
```

#### Font Sizes
```css
--font-size-h2: 48px                   /* Heading 2 */
--font-size-h3: 24px                   /* Heading 3 */
--font-size-h4: 20px                   /* Heading 4 */
--font-size-h4-h5: 16px                /* Heading 4-5 */
--font-size-citazione-desktop: 220px   /* Large quote for desktop */
```

#### Font Weights
```css
--font-weight-regular: 400              /* Regular */
--font-weight-medium: 500               /* Medium */
--font-weight-semibold: 600             /* Semibold */
```

#### Line Heights
```css
--line-height-normal: 1                    /* Normal */
--line-height-tight: 1                     /* Tight */
--line-height-h4-h5: 20px                  /* h4-h5 line height */
--line-height-h2: 52px                     /* h2 line height */
--line-height-citazione-desktop: 200px     /* Citation desktop line height */
```

#### Letter Spacing
```css
--letter-spacing-default: 0             /* Default (no spacing) */
--letter-spacing-tight: 0.2px           /* Tight spacing */
```

## Classi Typography

Classi CSS predefinite per la tipografia:

```css
.typography-h2                  /* h2 - Medium, 48px */
.typography-h3-semibold        /* h3 - Semibold, 24px */
.typography-h3-regular         /* h3 - Regular, 24px */
.typography-h4                 /* h4 - Regular, 20px */
.typography-h4-h5-semibold     /* h4/h5 - Semibold, 16px */
.typography-h4-h5-regular      /* h4/h5 - Regular, 16px */
.typography-citazione-desktop  /* Citation - Medium, 220px */
```

## Componenti Svelte

### Typography Component

Componente riutilizzabile per la tipografia con supporto per diversi livelli e varianti.

```svelte
<script>
	import Typography from '$lib/components/Typography.svelte';
</script>

<!-- h3 Regular -->
<Typography level="h3" variant="regular">
	Testo h3 regular
</Typography>

<!-- h3 Semibold -->
<Typography level="h3" variant="semibold">
	Testo h3 semibold
</Typography>

<!-- h2 Medium -->
<Typography level="h2" variant="medium">
	Testo h2 medium
</Typography>

<!-- Citation Desktop -->
<Typography level="citazione" variant="desktop" className="section-quote">
	La mia idea della bellezza è l'imperfezione.
</Typography>
```

### Button Component

Componente button per i filtri e le azioni.

```svelte
<script>
	import Button from '$lib/components/Button.svelte';
</script>

<!-- Default button -->
<Button variant="default">
	CHAIRS & ARMCHAIRS
</Button>

<!-- Active button -->
<Button variant="active">
	ALL WORKS
</Button>

<!-- With onclick handler -->
<Button 
	variant="default" 
	on:click={() => console.log('clicked')}
>
	Click me
</Button>
```

### Card Component

Componente card per gli elementi del portfolio e design works.

```svelte
<script>
	import Card from '$lib/components/Card.svelte';
</script>

<!-- Portfolio Card -->
<Card
	variant="portfolio"
	title="UP5 La Mamma"
	year="1969"
	image="https://..."
/>

<!-- Design Card -->
<Card
	variant="design"
	title="UP5 La Mamma"
	year="1969"
	description="A bulbous armchair inspired by fertility goddess statues..."
	category="CHAIRS & ARMCHAIRS"
	image="https://..."
/>
```

### Container Component

Componente container per il layout coerente con i token.

```svelte
<script>
	import Container from '$lib/components/Container.svelte';
</script>

<!-- Section container -->
<Container variant="section">
	<!-- Content -->
</Container>

<!-- Hero container -->
<Container variant="hero">
	<!-- Content -->
</Container>

<!-- Grid container -->
<Container variant="grid">
	<!-- Content -->
</Container>
```

## Token TypeScript

I token sono disponibili come costanti TypeScript in `src/lib/tokens.ts`:

```typescript
import {
	colors,
	spacing,
	radius,
	units,
	typography,
	typographyStyles,
	breakpoints
} from '$lib/tokens';

// Uso
const buttonColor = colors.accent.primary; // #f6392b
const padding = spacing[9]; // 72px
const borderRadius = radius.full; // 999px
```

## Responsive Breakpoints

```css
--breakpoint-tablet: 1024px    /* Tablet */
--breakpoint-mobile: 640px     /* Mobile */
```

I token si adattano automaticamente nei media query per dispositivi più piccoli.

## Convenzioni di Naming

- **Colors**: `--color-[category]-[variant]`
- **Spacing**: `--spacing-[scale]`
- **Radius**: `--radius-[size]`
- **Typography**: `--font-[property]` o `--line-height-[type]`
- **Classes**: `.typography-[type]-[variant]` o `.container-[variant]`

## Uso nei Componenti

### Con CSS Variables (consigliato)

```svelte
<div style="padding: var(--spacing-9); background-color: var(--color-background-primary);">
	<!-- Content -->
</div>
```

### Con Classi CSS

```svelte
<div class="typography-h3-semibold text-content-primary">
	Heading
</div>
```

### Con Componenti

```svelte
<Typography level="h3" variant="semibold">
	Heading
</Typography>
```

## Manutenzione

Per aggiornare i token:

1. Aggiorna `src/lib/tokens.css` per i token CSS
2. Aggiorna `src/lib/tokens.ts` per i token TypeScript
3. Usa il comando `npm run build` per compilare
4. I componenti utilizzeranno automaticamente i nuovi token

## Riferimenti

- Figma Design: https://www.figma.com/design/BP980PDPXlHChXdOOnWl5n/GAETANO-PESCE
- File Node ID: 8-2368
