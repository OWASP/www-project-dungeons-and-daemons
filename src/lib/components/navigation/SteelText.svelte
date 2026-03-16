<script lang="ts">
    import { onMount, tick } from 'svelte';

    let { text, class: className = '' }: { text: string; class?: string } = $props();

    let measureElement: HTMLSpanElement;
    let width = $state(1);
    let height = $state(1);
    let fontSize = $state(16);
    let fontFamily = $state('inherit');
    let fontWeight = $state('700');
    let letterSpacing = $state('0px');
    let transformedText = $state('');
    const patternId = `steel-pattern-${Math.random().toString(36).slice(2)}`;

    async function updateMetrics(): Promise<void>
    {
        await tick();

        if (!measureElement)
        {
            return;
        }

        const rect = measureElement.getBoundingClientRect();
        const styles = getComputedStyle(measureElement);
        const textTransform = styles.textTransform;

        width = Math.max(Math.ceil(rect.width), 1);
        height = Math.max(Math.ceil(rect.height), 1);
        fontSize = parseFloat(styles.fontSize) || 16;
        fontFamily = styles.fontFamily || 'inherit';
        fontWeight = styles.fontWeight || '700';
        letterSpacing = styles.letterSpacing || '0px';
        transformedText = applyTextTransform(text, textTransform);
    }

    function applyTextTransform(value: string, transform: string): string
    {
        if (transform === 'uppercase')
        {
            return value.toUpperCase();
        }

        if (transform === 'lowercase')
        {
            return value.toLowerCase();
        }

        if (transform === 'capitalize')
        {
            return value.replace(/\b\w/g, (character) => character.toUpperCase());
        }

        return value;
    }

    onMount(() =>
    {
        void updateMetrics();

        const resizeObserver = new ResizeObserver(() =>
        {
            void updateMetrics();
        });

        resizeObserver.observe(measureElement);

        return () =>
        {
            resizeObserver.disconnect();
        };
    });

    $effect(() =>
    {
        text;
        void updateMetrics();
    });
</script>

<span class={`steel-text ${className}`} aria-label={text}>
    <span bind:this={measureElement} class="steel-text-measure">{text}</span>
    <svg
        class="steel-text-svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMinYMid meet"
        aria-hidden="true"
    >
        <defs>
            <pattern id={patternId} patternUnits="userSpaceOnUse" width={Math.max(width, 220)} height={Math.max(height, 80)}>
                <image
                    href="/images/steel.jpg"
                    width={Math.max(width, 220)}
                    height={Math.max(height, 80)}
                    preserveAspectRatio="xMidYMid slice"
                />
            </pattern>
        </defs>

        <text
            x="0"
            y="0"
            fill="rgba(15, 18, 22, 0.72)"
            dominant-baseline="text-before-edge"
            transform="translate(1.25 1.25)"
            style={`font-size:${fontSize}px;font-family:${fontFamily};font-weight:${fontWeight};letter-spacing:${letterSpacing};white-space:pre;`}
        >{transformedText}</text>
        <text
            x="0"
            y="0"
            fill={`url(#${patternId})`}
            stroke="rgba(245, 248, 250, 0.35)"
            stroke-width="0.55"
            paint-order="stroke fill"
            dominant-baseline="text-before-edge"
            style={`font-size:${fontSize}px;font-family:${fontFamily};font-weight:${fontWeight};letter-spacing:${letterSpacing};white-space:pre;`}
        >{transformedText}</text>
    </svg>
</span>

<style>
    .steel-text
    {
        position: relative;
        display: inline-block;
        vertical-align: middle;
    }

    .steel-text-measure
    {
        display: inline-block;
        color: transparent;
        user-select: none;
        pointer-events: none;
    }

    .steel-text-svg
    {
        position: absolute;
        inset: 0;
        overflow: visible;
        pointer-events: none;
    }
</style>