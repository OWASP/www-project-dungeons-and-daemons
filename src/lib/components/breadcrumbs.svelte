<script lang="ts">
    import { page } from "$app/stores";
    import SteelText from "$lib/components/navigation/SteelText.svelte";
    import { Text } from "$lib/utils/text";

    let parts : string[];

    $: 
    {
        parts = $page.url.pathname.split('/');
    }

    function generateHref(index : number) : string
    {
        let result = "";
        for(let i = 0 ; i < index + 1 ; i++)
        {
            result += parts[i] + '/';
        }
        return result;
    }

    function generateName(input : string)
    {
        if(input == '')
            return 'Home'
        else
            return Text.Format(input.replace('.md',''));
    }
</script>

<p id="breadcrumbs">
    {#each parts as part,index}
        {#if index != 0}
            <span class="breadcrumb-separator"><SteelText text=">>>" /></span>
        {/if}
        <a href="{generateHref(index)}"><SteelText text={generateName(part)} /></a>
        <span> </span>
    {/each}
</p>

<style>
    p
    {
        font-size: 1.5rem;
    }

    a,
    .breadcrumb-separator
    {
        display: inline-flex;
        align-items: center;
    }
</style>