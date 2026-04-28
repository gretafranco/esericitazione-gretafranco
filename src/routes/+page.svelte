<script lang="ts">
    import { onMount } from 'svelte';
    import Card from '$lib/components/Card.svelte';

    /* --- IMPORT ASSETS DALLA TUA CARTELLA LIB/ASSETS --- */
    import imgHero from '$lib/assets/immagine-hero.png';
    import scarabocchioBlu from '$lib/assets/scarabocchio-blu.svg';
    import scintilleGialle from '$lib/assets/scintille-gialle.svg';
    import croceRossa from '$lib/assets/croce-rossa.svg';
    import cerchioVerde from '$lib/assets/cerchio-verde.svg';

    /* --- LOGICA FILTRI (Svelte 5) --- */
    let activeFilter = $state('ALL WORKS');

    function setFilter(filter: string) {
        activeFilter = filter;
    }

    /* --- LOGICA ANIMAZIONE CITAZIONE --- */
    let currentFrame = $state(0);
    const totalFrames = 5;

    // Array degli overlay che utilizza gli import corretti
    const overlays = [
        null,
        scarabocchioBlu,
        scintilleGialle,
        croceRossa,
        cerchioVerde
    ];

    onMount(() => {
        const interval = setInterval(() => {
            currentFrame = (currentFrame + 1) % totalFrames;
        }, 400); // Velocità dell'animazione "Instant" di Figma

        return () => clearInterval(interval);
    });

    /* --- DATA ASSETS (URL FIGMA) --- */
    const imgImgCard = 'https://www.figma.com/api/mcp/asset/0d664c53-05ca-45af-98a9-c076f5372afa';
    const imgImgCard1 = 'https://www.figma.com/api/mcp/asset/f417d7ed-a878-411b-83d9-a972878ddb9f';
    const imgImgCard2 = 'https://www.figma.com/api/mcp/asset/257180f6-6a7e-493b-a741-19439bb2f26c';
    const imgImgCard3 = 'https://www.figma.com/api/mcp/asset/dd389874-1f38-46aa-a73c-4d64cf642089';
    const imgImg = 'https://www.figma.com/api/mcp/asset/dc4ccf26-9660-4e93-9e5e-8d48e40ca093';
    const imgImg1 = 'https://www.figma.com/api/mcp/asset/ed006915-c1f7-4bde-85d9-49ae91f24e54';
    const imgImg2 = 'https://www.figma.com/api/mcp/asset/ea5c4b7f-d178-4471-8273-9c37a307c910';
    const imgImg3 = 'https://www.figma.com/api/mcp/asset/775b0688-c1ec-4f2a-81df-52d4952ca4eb';
    const imgImg4 = 'https://www.figma.com/api/mcp/asset/e53e60a3-efa8-49a7-86c6-b42edda83f01';
    const imgImg5 = 'https://www.figma.com/api/mcp/asset/a4c6f65e-2917-4bff-bd81-569e41c55e74';
    const imgImg6 = 'https://www.figma.com/api/mcp/asset/b4bdceac-be8d-4434-bf11-ac987a45308a';
    const imgImg7 = 'https://www.figma.com/api/mcp/asset/09a84e3e-32dc-405d-9f96-68af8e37ef9b';
    const imgImg8 = 'https://www.figma.com/api/mcp/asset/c1a57571-c88c-4526-b6cb-7063c0af3eaf';
    const imgImg9 = 'https://www.figma.com/api/mcp/asset/4c512bc7-b2ae-4564-8fdb-eda9c9d1061a';
    const imgImg10 = 'https://www.figma.com/api/mcp/asset/5c32b6c1-b6a7-477a-aa80-e0d536f104b5';
    const imgImg11 = 'https://www.figma.com/api/mcp/asset/305b6f0f-170f-44fe-afae-198f2ccf2f29';
    const imgImg12 = 'https://www.figma.com/api/mcp/asset/16cdf74a-f4c2-40a7-9a51-cfdc8eb2e021';
    const imgImg13 = 'https://www.figma.com/api/mcp/asset/354c6407-fc2a-420a-ad46-351c0fa8781e';
    const imgImg14 = 'https://www.figma.com/api/mcp/asset/51a414dd-3302-40ae-8701-47c5aed35aa5';

    /* --- PORTFOLIO ITEMS (Corretti con description per TS) --- */
    const portfolioItems = [
        { title: 'Il corpo femminile', year: '', category: 'CHAIRS & ARMCHAIRS', image: imgImgCard, description: '' },
        { title: "L'imperfezione", year: '', category: 'CHAIRS & ARMCHAIRS', image: imgImgCard1, description: '' },
        { title: 'La resina', year: '', category: 'Sezione', image: imgImgCard2, description: '' },
        { title: 'Il corpo della città', year: '', category: '', image: imgImgCard3, description: '' }
    ];

    /* --- DESIGN WORKS --- */
        /* --- DESIGN WORKS --- */
    const designWorks = [
        {
            title: 'UP5 "La Mamma"',
            year: '1969',
            description: 'A bulbous armchair inspired by fertility goddess statues, paired with a ball-shaped ottoman symbolising the constraints imposed on women.',
            category: 'CHAIRS & ARMCHAIRS',
            image: imgImg
        },
        {
            title: 'UP1',
            year: '1969',
            description: 'The first of the UP Series — a cylindrical foam seat that self-inflates from a flat vacuum-packed sheet, redefining how furniture could be shipped and experienced.',
            category: 'CHAIRS & ARMCHAIRS',
            image: imgImg1
        },
        {
            title: 'I Feltri',
            year: 'Anno',
            description: 'A bulbous armchair inspired by fertility goddess statues, paired with a ball-shaped ottoman symbolising the constraints imposed on women.',
            category: 'Sezione',
            image: imgImg2
        },
        {
            title: 'Dalila I, II, III',
            year: '1980',
            description: 'A trio of seats with sinuous, anthropomorphic silhouettes — each one a variation on the female form, made in resin and fabric.',
            category: 'CHAIRS & ARMCHAIRS',
            image: imgImg3
        },
        {
            title: 'Tramonto a New York',
            year: '1980',
            description: 'A modular sofa whose skyline-shaped backrest and blazing red semicircle evoke a Manhattan sunset — ironic, cinematic, unmistakably Pesce.',
            category: 'SOFA & TABLES',
            image: imgImg4
        },
        {
            title: 'Sit Down',
            year: '1975',
            description: 'An informal, shapeless sofa that rejects structural rigidity — designed to adapt to the body rather than impose a posture.',
            category: 'SOFA & TABLES',
            image: imgImg5
        },
        {
            title: 'Sessantuna',
            year: '2010',
            description: 'Sixty-one individual tables that, when assembled together, form a human face — a meditation on identity and collective design.',
            category: 'SOFA & TABLES',
            image: imgImg6
        },
        {
            title: 'Moloch',
            year: '1971',
            description: 'A floor lamp scaled up to monumental proportions — a domestic object turned ironic monument, blurring the line between design and sculpture.',
            category: 'LAMPS & LIGHTING',
            image: imgImg7
        },
        {
            title: 'Umbrella Lamp',
            year: '1995',
            description: 'A lamp enclosed inside a translucent umbrella form, playing with the idea of shelter, light, and the uncanny familiarity of everyday objects.',
            category: 'LAMPS & LIGHTING',
            image: imgImg8
        },
        {
            title: 'Organic Building',
            year: '1993',
            description: 'A building facade fitted with protruding plant pockets and an automated irrigation system — one of the earliest examples of a living vertical garden.',
            category: 'ARCHITECTURE',
            image: imgImg9
        },
        {
            title: 'Pescetrullo',
            year: '2008',
            description: 'A house in Puglia built with wooden formwork and polyurethane — an experimental dwelling that treats the home as a sculptural act.',
            category: 'ARCHITECTURE',
            image: imgImg10
        },
        {
            title: 'Fish Design — vases',
            year: '1996',
            description: 'A collection of vases and decorative objects in fibreglass resin, produced by Fish Design — playful, colourful, and proudly non-functional in spirit.',
            category: 'ART & OBJECTS',
            image: imgImg11
        },
        {
            title: 'Bottiglia Vittel',
            year: '1986',
            description: 'A mineral water bottle redesigned as a sculptural object — one of Pesce\'s rare forays into mass-market industrial design with a distinctly artistic sensibility.',
            category: 'ART & OBJECTS',
            image: imgImg12
        },
        {
            title: 'Maestà Sofferente',
            year: '2019',
            description: 'A towering 8-metre figure pierced by arrows and chained to a ball — a brutal, unapologetic statement against violence on women.',
            category: 'ART & OBJECTS',
            image: imgImg13
        },
        {
            title: 'Tu si \'na cosa grande',
            year: '2024',
            description: 'Pesce\'s final work, created as a tribute to Naples — a monumental installation celebrating the city\'s chaotic beauty and cultural resilience.',
            category: 'ART & OBJECTS',
            image: imgImg14
        }
    ];
    
    /* --- FILTER LOGIC (Svelte 5 derived state) --- */
    let filteredWorks = $derived(
        activeFilter === 'ALL WORKS' 
            ? designWorks 
            : designWorks.filter(work => work.category === activeFilter)
    );
</script>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        background-color: var(--color-background-primary);
        font-family: var(--font-family-primary);
        color: var(--color-content-primary);
    }

    .container {
        background-color: var(--color-background-primary);
        min-height: 100vh;
        width: 100%;
        position: relative;
    }

    /* HERO */
    .hero-section {
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .hero-section img {
        width: 100%;
        height: auto;
        display: block;
        mix-blend-mode: multiply;
    }

    .main-title {
        font-size: clamp(80px, 15vw, 262px);
        font-weight: var(--font-weight-medium);
        color: var(--color-content-primary);
        margin-top: -0.235em;
        line-height: 1;
        white-space: nowrap;
        padding-left: 15px;
        position: relative;
    }

    /* NAVBAR */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: var(--spacing-5) var(--spacing-9);
    }

    .navbar-brand {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
    }

    .navbar-links {
        display: flex;
        gap: var(--spacing-5);
    }

    /* NAVBAR LINKS AGGIORNATI */
    .navbar-link {
        text-decoration: none;
        color: inherit;
        font-size: var(--font-size-h3);
        transition: color 0.3s ease; /* Rende il passaggio al rosso fluido */
    }

    .navbar-link:hover {
        color: #f6392b; /* Il rosso Gaetano Pesce */
    }
	    /* SECTIONS */
    .section {
        padding: var(--spacing-11) var(--spacing-9) var(--spacing-12);
        background-color: var(--color-background-primary);
    }

    .section-title {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        color: var(--color-content-primary);
        margin-bottom: var(--spacing-5);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-default);
    }

    .section-description {
        font-size: var(--unit-48);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-h2);
        color: var(--color-content-primary);
        max-width: 1182px;
        margin-bottom: var(--spacing-12);
    }

    /* ANIMATED QUOTE SECTION */
    .quote-container {
        padding: var(--spacing-12) var(--spacing-9);
        position: relative;
        display: flex;
        justify-content: flex-end;
    }

    .section-quote {
        position: relative;
        font-family: var(--font-family-font1);
        font-size: var(--font-size-citazione-desktop);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-citazione-desktop);
        text-align: right;
        max-width: 1316px;
        margin: 0;
    }

	.word-wrapper {
        position: relative;
        display: inline-block; /* Fondamentale per contenere l'absolute */
    }

    .overlay-animation {
        position: absolute;
        pointer-events: none;
        z-index: 2;
        /* Rimuovi i valori generici top/left da qui */
    }

    /* Regola questi valori guardando il tuo design su Figma */
    .frame-1 { 
    /* Aumenta 'top' per scendere (es. da 30px a 50px o più) */
    top: 3065px; 
    
    /* Centra lo scarabocchio se diventa molto grande */
    left: 80%;
    transform: translateX(-30%); 
    
    /* Aumenta la dimensione (es. da 180% a 250%) */
    width: 450%; 
}
    .frame-2 { 
        top: -5px; 
        left: 20%;
        width: 800%; /* Le scintille gialle sopra 'bellezza' */
    } 

    .frame-3 { 
        top: 10px; 
        left: -10px; 
        width: 50px; /* La X rossa sopra 'impe...' */
    } 

    .frame-4 { 
        top: -15px; 
        left: -5px; 
        width: 120%; /* Il cerchio verde attorno a 'idea' */
    }

        /* --- ANIMAZIONE SULLA CITAZIONE - POSIZIONAMENTI SISTEMATI --- */
    .overlay-animation {
        position: absolute;
        pointer-events: none;
        z-index: 2;
        width: auto; 
        height: auto;
        max-width: none;
    }

       /* 1. SCARABOCCHIO BLU - Versione con top invece di bottom */
    .frame-1 { 
        position: absolute;
        top: 140px;
        left: 80px;
        width: 300px;
        height: auto;
        pointer-events: none;
        z-index: 10;
    }

    /* 2. SCINTILLE GIALLE - sopra "bellezza" (PIÙ GRANDE) */
    .frame-2 { 
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-5px);
        width: 45vw;       /* Aumentato da 25vw a 45vw */
        min-width: 520px;  /* Aumentato da 150px a 250px */
        max-width: 770px;  /* Aumentato da 350px a 500px */
    }

       /* 3. CROCE ROSSA - PIÙ GRANDE e PIÙ A DESTRA */
    .frame-3 { 
        position: absolute;
        bottom: 100%;
        right: -100px;        
        transform: translateY(-5px);
        width: 200px;         /* Più grande (da 120 a 180) */
        height: auto;
        pointer-events: none;
        z-index: 10;
    }

    /* 4. CERCHIO VERDE - intorno a "idea" */
    .frame-4 { 
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        width: 100%;
        height: auto;
        min-width: 100px;
    }


    /* FILTERS */
    .filters {
        display: flex;
        gap: var(--spacing-2);
        padding: 40px var(--spacing-9) 0px;
        overflow-x: auto;
    }

    .filter-button {
        padding: 10px 24px;
        border-radius: var(--radius-full);
        border: none;
        cursor: pointer;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        text-transform: uppercase;
        background-color: transparent;
        transition: all 0.2s ease;
    }

    .filter-button:hover { background-color: var(--color-background-secondary); }

    .filter-button.active {
        background-color: var(--color-filter-background-selected) !important;
        color: var(--color-filter-text-selected) !important;
    }

    /* GRIDS */
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-5);
        padding: var(--spacing-5) var(--spacing-9);
    }

    .design-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-8) var(--spacing-5);
        padding: var(--spacing-9) var(--spacing-9) var(--spacing-11);
    }

	    /* PORTFOLIO GRID */
    .portfolio-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--spacing-5);
        padding: var(--spacing-5) var(--spacing-9);
        background-color: var(--color-background-primary);
    }

    .portfolio-card {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .portfolio-card:hover .portfolio-card-title {
        color: var(--color-accent-primary);
        transition: color 0.3s ease;
    }

    .portfolio-image {
        width: 100%;
        aspect-ratio: 378 / 500;
        object-fit: cover;
        background-color: #e0e0e0;
    }

    .portfolio-card-title {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        color: var(--color-content-primary);
    }

 /* DESIGN GRID AGGIORNATA */
    .design-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--spacing-8) var(--spacing-5);
        padding: var(--spacing-9) var(--spacing-9) var(--spacing-11);
        background-color: var(--color-background-primary);
    }

    .design-card {
        display: flex;
        flex-direction: column;
        gap: 0;
        position: relative;
        /* Linea sinistra spessa */
        border-left: 2px solid transparent; 
        transition: border-color 0.3s ease;
        padding: var(--spacing-4) 0; /* Padding verticale per distanziare le card */
    }

    .design-card:hover {
        border-left: 2px solid var(--color-content-primary);
    }

    /* Container unico per testo e immagine con lo stesso rientro */
    .design-card-inner {
        padding: 0 var(--spacing-5); /* Questo crea lo spazio vuoto a DX e SX */
        display: flex;
        flex-direction: column;
    }

    .design-card-content {
        position: relative;
        z-index: 2;
        width: 100%;
    }

    .design-card-image {
        width: 100%;
        aspect-ratio: 664 / 401;
        object-fit: cover;
        background-color: #e0e0e0;
        display: block;
        margin-top: var(--spacing-4); /* Spazio tra descrizione e foto */
    }

    .design-card-title {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        color: var(--color-content-primary);
        margin-bottom: 6px;
        transition: color 0.3s ease;
    }

    .design-card:hover .design-card-title {
        color: #f6392b;
    }

    .design-card-year {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-regular);
        color: var(--color-content-primary);
        margin-bottom: 6px;
    }

    .design-card-description {
        font-size: var(--font-size-h4);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-h4-h5);
        color: var(--color-content-primary);
        padding-right: 30px; /* Spazio per la freccia */
    }

    .design-card-category {
        font-size: var(--font-size-h4-h5);
        font-weight: var(--font-weight-semibold);
        color: var(--color-content-secondary);
        position: absolute;
        top: 0;
        right: 0; /* Allineato al margine interno del padding-5 */
    }

    .arrow-icon {
        position: absolute;
        bottom: 4px;
        right: 0;
        width: 18px;
        height: 18px;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .design-card:hover .arrow-icon {
        opacity: 1;
    }

    /* FOOTER */
       /* FOOTER */
    .footer {
        padding: var(--spacing-5) var(--spacing-9) var(--spacing-12);
        background-color: var(--color-background-primary);
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--spacing-9);
    }

    .footer-section h2 {
        font-size: var(--unit-48);
        font-weight: var(--font-weight-medium);
        line-height: var(--line-height-h2);
        color: var(--color-content-primary);
        margin: 0 0 32px 0;
    }

    .footer-section p {
        font-size: var(--font-size-h3);
        color: var(--color-content-primary);
        margin: 0 0 16px 0;
        line-height: 1.5;
    }

    .footer-section a {
        color: var(--color-content-primary);
        text-decoration: none;
    }

    .footer-section a:hover {
        color: var(--color-accent-primary);
    }

    @media (max-width: 1024px) {
        .portfolio-grid, .design-grid, .footer { grid-template-columns: repeat(2, 1fr); }
    }

    /* =============================================
       TABLET — max-width: 744px
    ============================================= */
    @media (max-width: 744px) {

      /* NAVBAR */
    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        /* Padding: sopra/sotto (var spacing-5) e 40px ai lati */
        padding: var(--spacing-5) 40px; 
    }

    .navbar-brand {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
    }

    .navbar-links {
        display: flex;
        gap: var(--spacing-5);
    }

    /* NAVBAR LINKS AGGIORNATI */
    .navbar-link {
        text-decoration: none;
        color: inherit;
        font-size: var(--font-size-h3);
        transition: color 0.3s ease;
    }

        /* HERO — titolo che occupa tutta la larghezza */
        .main-title {
            font-size: clamp(62px, 16.15vw, 132px);
            padding-left: 0;
            padding-right: 0;
            white-space: nowrap;
            overflow: hidden;
            letter-spacing: -0.03em;
        }

        /* SECTION descrizione */
        .section {
            padding: 40px 40px 48px;
        }
       .section-title {
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        color: var(--color-content-primary);
        margin-bottom: var(--spacing-5);
        text-transform: uppercase;
        letter-spacing: var(--letter-spacing-default);
    }

        .section-description {
            font-size: clamp(20px, 3.8vw, 30px);
            line-height: 1.3;
            max-width: 75%;
            margin-bottom: 0;
        }

        /* PORTFOLIO GRID — 4 colonne compatte */
        /* Griglia Portfolio */
    .portfolio-grid {
        display: flex;
        /* Forza 2 colonne fisse da 148px */
        grid-template-columns: repeat(2, 148px); 
        /* Gap richiesto di 24px tra le card */
        gap: 24px; 
        /* Padding laterale di 40px come richiesto */
        padding: 24px 40px; 
        justify-content: start;
    }

    /* Immagini Portfolio */
    .portfolio-card img {
        width: 148px !important;
        height: 196px !important;
        object-fit: cover;
        /* Se avevi un bordo o arrotondamento, mantienilo qui */
    }

    /* Testi Portfolio (Grandi come su Desktop) */
    .portfolio-card-title {
        /* Usiamo la variabile desktop, non rimpicciolirla */
        font-size: var(--font-size-h3) !important;
        /* Assicuriamoci che il titolo non superi la larghezza dell'immagine */
        width: 148px;
        white-space: normal;
        margin-top: 8px;
    }

    
        .portfolio-card-title { font-size: var(--font-size-h3); }
        .portfolio-card:hover .portfolio-card-title {
            color: var(--color-content-primary) !important;
        }

        


        /* QUOTE — grande, 3/4 colonne da destra */
      .quote-container {
        grid-column: 2 / 5 !important;
        display: flex;
        justify-content: flex-end;
        padding: 100px 0; /* Spazio verticale generoso come da design */
        position: relative;
        margin-right: 40px;
    }

    .section-quote {
        /* Dimensioni dal tuo screenshot di Figma */
        font-size: 80px !important; 
        line-height: 0.9 !important; /* Molto compatto come in foto */
        text-align: right;
        font-weight: var(--font-weight-medium);
        max-width: 100%;
        position: relative;
        display: inline-block;
    }

    /* --- POSIZIONAMENTI FRAME (DALLE TUE FOTO) --- */

    .overlay-animation {
        position: absolute;
        pointer-events: none;
        z-index: 10;
    }

    /* 1. SCARABOCCHIO BLU (frame-1) */
    .frame-1 { 
        top: 100px !important;
        left: -120px !important; /* Esce a sinistra rispetto al testo */
        width: 320px !important;
        transform: rotate(-5deg) !important;
        transform: translateY(40%) !important; /* Spostamento più preciso */
    }

    /* 2. SCINTILLE GIALLE (frame-2) - Sopra "original" */

    .frame-2 { 
        position: absolute;
        bottom: 100% !important;
        left: 30% !important;
        
        /* Cambiamo translateX da 8% a un valore negativo (es. -15%) per portarlo a sinistra.
           Manteniamo translateY(25px) per l'altezza e scale(2.8) per la dimensione. */
        transform: translateX(-5%) translateY(25px) scale(2.8) !important;
        
        width: 400px !important;
        min-width: 400px !important;
        z-index: 10;
        pointer-events: none;
    }
    /* 3. CROCE ROSSA (frame-3) - Sopra "world" */
   .frame-3 { 
        position: absolute;
        /* Più a DESTRA: aumentiamo il valore negativo */
        right: -350px !important; 
        
        /* Più in BASSO: portiamo top al 100% (fondo del testo) 
           e usiamo un translateY meno aggressivo */
        top: 80% !important;
        transform: translateY(-80%) scale(1.6) !important;
        
        width: 180px !important;
        z-index: 10;
        pointer-events: none;
    }

    /* 4. CERCHIO VERDE (frame-4) - Intorno a "most" */
    .frame-4 { 
        top: 20% !important;
        left: 20% !important;
        width: 300px !important;
        transform: scale(3.5) !important;
         transform: translateX(-20%) translateY(-20%) !important;
    }


        /* =============================================
   TABLET — max-width: 744px
============================================= */
@media (max-width: 744px) {
    /* ... altre regole esistenti ... */
/* Update per Tablet e Mobile */
@media (max-width: 744px), (max-width: 402px) {
    .filters {
        display: grid;
        /* Due colonne che si adattano al contenuto */
        grid-template-columns: auto auto; 
        /* Allineamento a sinistra della griglia */
        justify-content: start; 
        /* Spazio orizzontale tra le due colonne e verticale tra le righe */
        column-gap: 0px; 
        row-gap: 0px;
        /* Padding laterale di 40px come la navbar */
        padding: 40px 40px 0;
    }

    .filter-button {
        /* Reset e stili dal desktop */
        padding: 10px 24px;
        border-radius: var(--radius-full);
        border: none;
        cursor: pointer;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-h3);
        font-weight: var(--font-weight-semibold);
        text-transform: uppercase;
        background-color: transparent;
        transition: all 0.2s ease;
        
        /* Forza il pulsante a essere grande quanto il suo testo */
        width: max-content;
        /* Allineamento testo al centro della pillola */
        text-align: center;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .filter-button.active {
        /* Colori desktop */
        background-color: var(--color-filter-background-selected) !important;
        color: var(--color-filter-text-selected) !important;
        /* Rimuoviamo il margine negativo che causava il decentramento */
        margin-left: 0; 
    }
}
}

        /* QUOTE animation — overlay proporzionati al font tablet */
        .frame-1 {
            width: 90px !important;
            top: 40px !important;
            left: 6px !important;
        }
        .frame-2 {
            width: 14vw !important;
            min-width: 80px !important;
            max-width: 140px !important;
        }
        .frame-3 {
            width: 55px !important;
            right: -14px !important;
        }
        .frame-4 {
            width: 100% !important;
        }

        /* DESIGN GRID — 2 colonne, padding laterale 40px */
        .design-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 56px 0;
            padding: 40px 40px 64px;
        }
        /* Linea laterale sempre visibile su tablet (non solo hover) */
        .design-card {
            border-left: 2px solid var(--color-content-primary) !important;
            padding: var(--spacing-4) 0;
        }
        .design-card-inner { padding: 0 20px; }
        .design-card-title { font-size: 18px; }
        .design-card-year { font-size: 18px; }
        .design-card-description { font-size: 13px; line-height: 1.5; }
        .design-card-category { font-size: 11px; }
        /* Disabilita cambio colore hover su tablet */
        .design-card:hover { border-left: 2px solid var(--color-content-primary) !important; }
        .design-card:hover .design-card-title { color: var(--color-content-primary) !important; }
        .design-card:hover .arrow-icon { opacity: 0 !important; }

/* ========== FOOTER ========== */
.footer {
    padding: 80px 40px 40px;
}


.footer-section {
    display: flex;
    flex-direction: column;
    gap: 0;
}

/* Titoli Footer: 24px / 26px */
.footer-section h2 {
    font-size: 24px !important;
    line-height: 26px !important;
    margin: 0 0 24px 0;
    font-weight: var(--font-weight-medium);
}

/* Testi Footer: 18px / 20px */
.footer-section p {
    font-size: 18px !important;
    line-height: 20px !important;
    margin: 0 0 4px 0;
     text-align: left;
}

.footer-section a {
    font-size: 18px !important;
    line-height: 20px !important;
    color: var(--color-content-primary);
    text-decoration: underline;
    text-underline-offset: 2px;
    transition: color 0.2s ease;
    
}

/* Contact section allineata a DESTRA */
.contact-section {
    text-align: left;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
}

/* Copyright: 12px / 14px */
.copyright-row {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding-top: 16px;
    margin-top: 40px;
}

.copyright-row p {
    font-size: 12px !important;
    line-height: 14px !important;
    margin: 0;
}

    
    }

   
        /* =============================================
       MOBILE — max-width: 402px
    ============================================= */
    @media (max-width: 402px) {
        
        /* NAVBAR — hamburger menu */
        .navbar {
            padding: var(--spacing-5) 20px;
        }
        
        .navbar-brand {
            font-size: 14px;
            font-weight: var(--font-weight-semibold);
        }
        
        .navbar-links {
            display: none; /* Nascondi i link, mostra hamburger */
        }

        /* HERO — titolo ridimensionato */
        .main-title {
            font-size: clamp(48px, 16.2vw, 96px);
            margin-top: -0.3em;
            padding-left: 0;
            white-space: nowrap;
        }

        /* SECTION — padding ridotto */
        .section {
            padding: 32px 20px 40px;
        }
        
        .section-title {
            font-size: 14px;
            margin-bottom: 16px;
        }
        
                .section-description {
            font-size: 18px !important;
            line-height: 20px !important;
            max-width: 75%; /* 3 colonne su 4, occupa il 75% dello schermo */
            margin-bottom: 24px; /* Spazio aggiuntivo sotto se necessario */
        }

        /* PORTFOLIO GRID — 2 colonne più compatte */
        .portfolio-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            padding: 20px;
        }
        
        .portfolio-card img {
            width: 100%;
            height: auto;
            aspect-ratio: 378 / 500;
        }
        
        .portfolio-card-title {
            font-size: 14px !important;
            width: 100%;
        }

       /* QUOTE — ridimensionata e allineata a destra come il tablet */
        .quote-container {
            padding: 60px 0; /* Ridotto da 100px */
            margin-right: 20px; /* Ridotto da 40px */
            display: flex;
            justify-content: flex-end; /* Mantiene allineamento destra */
        }

        .section-quote {
            font-size: 42px !important; /* Scalato da 80px */
            line-height: 0.95 !important; /* Leggermente più alto per leggibilità */
            text-align: right; /* Mantiene allineamento destra */
            font-weight: var(--font-weight-medium);
            max-width: 100%;
        }

        .overlay-animation {
            position: absolute;
            pointer-events: none;
            z-index: 10;
        }

        /* 1. SCARABOCCHIO BLU (frame-1) - Scalato */
      .frame-1 { 
    top: 25px !important; /* Più in alto (era 50px) */
    left: -10px !important; /* Leggermente più verso il centro per compensare il rimpicciolimento */
    width: 70px !important; /* Più piccolo (era 160px) */
    transform: rotate(-5deg) translateY(0%) !important;
}
        /* 2. SCINTILLE GIALLE (frame-2) - Scalato */
      .frame-2 { 
    position: absolute;
    bottom: 100% !important;
    left: 10% !important; /* Spostato da 30% a 10% per andare a sinistra */
    
    /* translateY negativo (-15px) per salire più in alto */
    transform: translateX(-15%) translateY(5px) scale(1.2) !important;
    
    width: 200px !important; 
    min-width: 140px !important;
}

        /* 3. CROCE ROSSA (frame-3) - Scalato e riposizionato per non sparire */
      .frame-3 { 
    position: absolute;
    right: -120px !important; /* Più a destra (da -80px a -120px) */
    
    top: 95% !important;      /* Più in basso (da 80% a 95%) */
    
    /* translateY ridotto da -80% a -40%: tira meno in alto, 
       quindi l'elemento scende visivamente */
    transform: translateY(-70%) scale(0.7) !important;
    
    width: 70px !important; 
}

        /* 4. CERCHIO VERDE (frame-4) - Scalato */
     .frame-4 { 
    top: 20% !important;
    left: 20% !important;
    width: 40px !important; /* Ridotto ulteriormente (da 80px a 40px) */
    transform: translateX(-30%) translateY(-20%) scale(0.8) !important; 
}


        /* FILTERS — layout verticale o wrap */
        .filters {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            padding: 20px 20px 0;
            justify-content: flex-start;
        }
        
        .filter-button {
            padding: 8px 16px;
            font-size: 12px;
        }

        /* DESIGN GRID — singola colonna */
        .design-grid {
            grid-template-columns: 1fr;
            gap: 40px 0;
            padding: 32px 20px 48px;
        }
        
        .design-card {
            border-left: 2px solid var(--color-content-primary) !important;
            padding: 0;
        }
        
        .design-card-inner {
            padding: 0 16px;
        }
        
        .design-card-title {
            font-size: 18px;
        }
        
        .design-card-year {
            font-size: 16px;
        }
        
        .design-card-description {
            font-size: 14px;
            line-height: 1.5;
            padding-right: 0;
        }
        
        
        .design-card-image {
            margin-top: 16px;
        }
        
        .arrow-icon {
            display: none; /* Nascondi freccia su mobile */
        }

        /* FOOTER — layout verticale */
    
        /* ========== FOOTER MOBILE ========== */
        .footer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px 24px;
            padding: 60px 20px 32px;
        }

        .footer-section {
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        /* Titoli Footer: 18px / 20px */
        .footer-section h2 {
            font-size: 18px !important;
            line-height: 20px !important;
            margin: 0 0 16px 0;
            font-weight: var(--font-weight-medium);
        }

        /* Testi Footer: 12px / 14px */
        .footer-section p {
            font-size: 12px !important;
            line-height: 14px !important;
            margin: 0 0 4px 0;
            text-align: left;
        }

        .footer-section a {
            font-size: 12px !important;
            line-height: 14px !important;
            color: var(--color-content-primary);
            text-decoration: underline;
            text-underline-offset: 2px;
            transition: color 0.2s ease;
        }

        /* Laboratorio section - colonna sinistra */
        .footer-section:first-child {
            grid-column: 1;
        }

        /* Contact section - colonna destra */
        .contact-section {
            grid-column: 2;
            text-align: left;
            align-items: flex-start;
        }

        /* Credits section - colonna sinistra, sotto Laboratorio */
        .credits-section {
            grid-column: 1;
        }

        /* Copyright - colonna destra, sotto Contact */
        .copyright-row {
            grid-column: 2;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            padding-top: 12px;
            margin-top: auto;
            justify-self: end;
        }

        .copyright-row p {
            font-size: 10px !important;
            line-height: 12px !important;
            margin: 0;
        }
    
    }
    
</style>

<div class="container"> 
    <nav class="navbar">
        <div class="navbar-brand">GAETANO PESCE</div>
        <div class="navbar-links">
            <a href="#archive" class="navbar-link">ARCHIVIO</a>
            <a href="#contact" class="navbar-link">@gretafranco.design</a>
        </div>
    </nav>

    

    <section class="hero-section">
        <img src={imgHero} alt="Gaetano Pesce Hero" />
        <div class="main-title">GAETANO PESCE</div>
    </section>

        <div class="section">
        <h2 class="section-title">DESIGNER · ARCHITECT · VISIONARY — VENICE, 1939</h2>
        <p class="section-description">
            Gaetano Pesce didn't design objects — he designed provocations. For over six decades, he turned
            resin, polyurethane foam and sheer audacity into furniture that asked uncomfortable questions:
            about identity, about mass production, about what a chair is even allowed to feel like.
        </p>
    </div>

        <!-- Portfolio Cards -->
    <div class="portfolio-grid">
        {#each portfolioItems as item}
            <div class="portfolio-card">
                <img src={item.image} alt={item.title} class="portfolio-image" />
                <div style="display: flex; gap: 3px; align-items: center;">
                    <h3 class="portfolio-card-title">{item.title}</h3>
                    {#if item.year}
                        <span style="font-size: var(--font-size-h3); color: var(--color-content-primary);">{item.year}</span>
                    {/if}
                </div>
            </div>
        {/each}
    </div>

    <div class="quote-container">
       <p class="section-quote">
    La 
    <span class="word-wrapper">
        mia 
        {#if currentFrame === 1}
            <img src={overlays[1]} class="overlay-animation frame-1" alt=""/>
        {/if}
    </span> 

    <span class="word-wrapper">
        idea 
        {#if currentFrame === 4}
            <img src={overlays[4]} class="overlay-animation frame-4" alt=""/>
        {/if}
    </span> 
    <br>

    della 
    <span class="word-wrapper">
        bellezza 
        {#if currentFrame === 2}
            <img src={overlays[2]} class="overlay-animation frame-2" alt=""/>
        {/if}
    </span> 
    è <br>

    <span class="word-wrapper">
        l'imperfezione.
        {#if currentFrame === 3}
            <img src={overlays[3]} class="overlay-animation frame-3" alt=""/>
        {/if}
    </span>
</p>
    </div>

    <div class="filters">
        {#each ['ALL WORKS', 'CHAIRS & ARMCHAIRS', 'SOFA & TABLES', 'LAMPS & LIGHTING', 'ARCHITECTURE', 'ART & OBJECTS'] as filter}
            <button
                class="filter-button"
                class:active={activeFilter === filter}
                on:click={() => setFilter(filter)}
            >
                {filter}
            </button>
        {/each}
    </div>

        <!-- Design Works Grid -->
   <div class="design-grid">
    {#each filteredWorks as work}
        <div class="design-card">
            <div class="design-card-inner">
                <div class="design-card-content">
                    <div class="design-card-category">{work.category}</div>
                    <h3 class="design-card-title">{work.title}</h3>
                    <p class="design-card-year">{work.year}</p>
                    
                    <div style="position: relative;">
                        <p class="design-card-description">{work.description}</p>
                        <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 7L17 17M17 17V7M17 17H7" 
                                  stroke="black" 
                                  stroke-width="2" 
                                  stroke-linecap="round" 
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                
                <img src={work.image} alt={work.title} class="design-card-image" />
            </div>
        </div>
    {/each}
</div>

       <footer class="footer">
    <div class="footer-section">
        <h2>Laboratorio di Web<br />e Digital Design</h2>
        <p>Design della Comunicazione<br />Politecnico di Milano</p>
        <p>Prof. Umberto Tolino<br />Prof. Christian Mazzoleni</p>
    </div>
    
    <div class="footer-section contact-section">
        <h2>Let's get<br />in Touch</h2>
        <p>
            Greta Franco<br />
            <a href="mailto:greta.franco@mail.polimi.it">greta.franco@mail.polimi.it</a><br />
            <a href="https://www.instagram.com/gretafranco.design/" target="_blank">@gretafranco.design</a>
        </p>
    </div>

    <div class="footer-section credits-section">
        <h2>Project's<br />Credits</h2>
        <p>
            Gaetano Pesce<br />
            <a href="https://www.corsidesign.it/gaetano-pesce">https://www.corsidesign.it/gaetano-pesce</a><br />
            <a href="https://shop.mohd.it/en">https://shop.mohd.it/en</a><br />
            All images belong to their respective owners.
        </p>
    </div>

    <div class="copyright-row">
        <p>© 2026 Greta Franco · All rights reserved</p>
        <p>Progetto realizzato per Laboratorio di Web & Digital Design — PoliMi</p>
    </div>
</footer>
</div>