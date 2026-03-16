<script lang="ts">
    export let data;

    type CharacterCard = {
        title: string;
        href: string;
        image: string;
        alt: string;
    };

    type ParsedContent = {
        title: string;
        intro: string[];
        cards: CharacterCard[];
        body: string[];
    };

    let parsedContent: ParsedContent = parseCharacterContent(data?.content ?? '');

    $: parsedContent = parseCharacterContent(data?.content ?? '');

    function parseCharacterContent(content: string): ParsedContent
    {
        const lines = content.split('\n').map((line) => line.trim());
        const titleLine = lines.find((line) => line.startsWith('# ')) ?? '';
        const title = titleLine.replace(/^#\s+/, '');
        const tableStart = lines.findIndex((line) => line.startsWith('|'));

        if (tableStart !== -1)
        {
            const introLines = lines.slice(0, tableStart).filter((line) => line && !line.startsWith('# '));
            const cards = lines
                .slice(tableStart)
                .filter((line) => isCardRow(line))
                .map((line) => parseCardRow(line))
                .filter((card): card is CharacterCard => card !== null);

            return {
                title,
                intro: splitParagraphs(introLines),
                cards,
                body: []
            };
        }

        const bodyLines = lines.filter((line) => line && !line.startsWith('# '));

        return {
            title,
            intro: [],
            cards: [],
            body: splitParagraphs(bodyLines)
        };
    }

    function isCardRow(line: string): boolean
    {
        return line.startsWith('|')
            && !/^\|[\s:-]+\|[\s:-]*\|?$/.test(line)
            && line.includes('](')
            && line.includes('![');
    }

    function parseCardRow(line: string): CharacterCard | null
    {
        const cells = line
            .replace(/^\|/, '')
            .replace(/\|$/, '')
            .split('|')
            .map((cell) => cell.trim());

        if (cells.length < 2)
        {
            return null;
        }

        const linkMatch = cells[0].match(/^\[(.*)\]\((.*)\)$/);
        const imageMatch = cells[1].match(/^!\[(.*)\]\((.*)\)$/);

        if (!linkMatch || !imageMatch)
        {
            return null;
        }

        const [, title, href] = linkMatch;
        const [, alt, image] = imageMatch;

        return {
            title,
            href,
            alt,
            image: normalizeImagePath(image)
        };
    }

    function splitParagraphs(lines: string[]): string[]
    {
        const paragraphs: string[] = [];
        let currentParagraph: string[] = [];

        for (const line of lines)
        {
            if (!line)
            {
                if (currentParagraph.length)
                {
                    paragraphs.push(currentParagraph.join(' '));
                    currentParagraph = [];
                }
                continue;
            }

            currentParagraph.push(line);
        }

        if (currentParagraph.length)
        {
            paragraphs.push(currentParagraph.join(' '));
        }

        return paragraphs;
    }

    function normalizeImagePath(image: string): string
    {
        return image.replace(/^\/static/, '');
    }

    function formatInlineMarkdown(text: string): string
    {
        const escaped = text
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');

        return escaped.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    }
</script>

{#if parsedContent.title}
    <section class="character-page">
        <header class="page-header">
            <h1>{parsedContent.title}</h1>

            {#each parsedContent.intro as paragraph}
                <p>{@html formatInlineMarkdown(paragraph)}</p>
            {/each}
        </header>

        {#if parsedContent.cards.length}
            <div class="playing-card-grid">
                {#each parsedContent.cards as card}
                    <a class="playing-card" href={card.href} aria-label="Open {card.title}">
                        <div class="card-image-frame">
                            <img src={card.image} alt={card.alt || `Portrait of ${card.title}`} />
                        </div>
                        <div class="card-copy">
                            <h2>{card.title}</h2>
                        </div>
                    </a>
                {/each}
            </div>
        {/if}

        {#if parsedContent.body.length}
            <div class="character-detail">
                {#each parsedContent.body as paragraph}
                    <p>{@html formatInlineMarkdown(paragraph)}</p>
                {/each}
            </div>
        {/if}
    </section>
{/if}

<style>
    .character-page
    {
        width: min(1100px, calc(100% - 4rem));
        margin: 2rem auto 3rem;
    }

    .page-header,
    .character-detail
    {
        margin-bottom: 2rem;
    }

    h1
    {
        margin: 0 0 1rem 0;
        font-size: clamp(2rem, 3vw, 3rem);
        line-height: 1.1;
    }

    p
    {
        font-size: 1.3rem;
        line-height: 1.55;
        margin: 0 0 1rem 0;
    }

    .playing-card-grid
    {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
    }

    .playing-card
    {
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: var(--white);
        background: linear-gradient(180deg, rgba(97, 182, 230, 0.16) 0%, rgba(28, 28, 28, 0.96) 30%);
        border: 1px solid rgba(237, 237, 237, 0.24);
        border-radius: 1.1rem;
        overflow: hidden;
        box-shadow: 0 18px 36px rgba(0, 0, 0, 0.28);
        transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    }

    .playing-card:hover
    {
        transform: translateY(-5px);
        box-shadow: 0 26px 48px rgba(0, 0, 0, 0.36);
        border-color: rgba(97, 182, 230, 0.8);
    }

    .card-image-frame
    {
        aspect-ratio: 3 / 4;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.04);
    }

    img
    {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
        transition: transform 0.25s ease, filter 0.25s ease;
    }

    .playing-card:hover img
    {
        transform: scale(1.04);
        filter: brightness(1.08);
    }

    .card-copy
    {
        padding: 1rem 1rem 1.1rem;
    }

    h2
    {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.2;
        text-transform: uppercase;
        letter-spacing: 0.04em;
    }

    @media (max-aspect-ratio: 1/1)
    {
        .character-page
        {
            width: calc(100% - 2rem);
            margin: 1rem auto 2rem;
        }

        p
        {
            font-size: 1.1rem;
        }

        .playing-card-grid
        {
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        }
    }
</style>