<script lang="ts">
    import { Text } from "$lib/utils/text";

    type CollectionCard = {
        slug: string;
        image: string | null;
    };

    export let items: CollectionCard[] = [];
    export let basePath = "";
</script>

<section class="games-grid">
    {#each items as item}
        <a class="game-card" href={`${basePath}/${item.slug}`} aria-label={`Open ${Text.Format(item.slug)}`}>
            {#if item.image}
                <div class="image-frame">
                    <img src={item.image} alt={`Artwork for ${Text.Format(item.slug)}`} />
                </div>
            {/if}
            <div class="content">
                <h2>{Text.Format(item.slug)}</h2>
            </div>
        </a>
    {/each}
</section>

<style>
    .games-grid
    {
        width: min(1100px, calc(100% - 4rem));
        margin: 2rem auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
    }

    .game-card
    {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        background: linear-gradient(180deg, rgba(97, 182, 230, 0.12) 0%, rgba(28, 28, 28, 0.95) 35%);
        border: 1px solid rgba(237, 237, 237, 0.3);
        border-radius: 1rem;
        overflow: hidden;
        min-height: 18rem;
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.2);
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .game-card:hover
    {
        transform: translateY(-4px);
        box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
        border-color: rgba(97, 182, 230, 0.8);
    }

    .image-frame
    {
        aspect-ratio: 16 / 9;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.03);
    }

    img
    {
        display: block;
        width: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.25s ease, filter 0.25s ease;
    }

    .game-card:hover img
    {
        transform: scale(1.03);
        filter: brightness(1.08);
    }

    .content
    {
        display: flex;
        align-items: center;
        padding: 1.2rem 1.25rem 1.35rem;
        flex: 1;
    }

    h2
    {
        margin: 0;
        font-size: 1.6rem;
        line-height: 1.15;
        color: var(--white);
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    @media (max-aspect-ratio: 1/1)
    {
        .games-grid
        {
            width: calc(100% - 2rem);
            gap: 1rem;
            margin: 1rem auto 2rem;
        }

        h2
        {
            font-size: 1.35rem;
        }
    }
</style>