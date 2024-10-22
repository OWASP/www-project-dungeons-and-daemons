<script>
    export let data;
    import { Text } from '$lib/utils/text';
    import SvelteMarkdown from 'svelte-markdown'
    import renderers from '$lib/components/renderers/renderers';
</script>

<!--The location is a file -->
{#each data.files as file}
    <p>├──<a href="/rules/{data.path}/{file}">{Text.Format(file)}</a></p>
{/each}

<!--The location is a folder -->
{#each data.folders as folder}
    <p>├──<a href="/rules/{data.path}/{folder}">{Text.Format(folder)}</a></p>
{/each}

<!--The location is filecontent -->
{#if data.content && data.content != ''}
    <div class="rules-content">
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