<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
</script>

<!--The location is filecontent -->
{#if data.content && data.content != ''}
    <div class="character-content">
    <SvelteMarkdown {renderers} source={data.content}></SvelteMarkdown>
    </div>
{/if}

<style>
    p
    {
        font-size: 1.5rem;
        margin:0;
    }

    a
    {
        text-decoration: none;
    }

    a:hover
    {
        opacity:50%;
    }

</style>