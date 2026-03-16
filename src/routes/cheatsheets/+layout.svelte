<script>
    import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
    import SteelText from '$lib/components/navigation/SteelText.svelte';
</script>

<div>
    <Breadcrumbs></Breadcrumbs>
    <h1><SteelText text="Cheatsheets" /></h1>
    <slot></slot>
</div>


<style>
    div
    {
        width : 60%;
        margin : auto;
        padding-top: 1rem;
        padding-bottom: 1rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        div
        {
            width: 95%;
        }
    }
</style>