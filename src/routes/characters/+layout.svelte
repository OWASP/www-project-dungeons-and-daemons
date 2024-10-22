<script>
    import Breadcrumbs from "$lib/components/breadcrumbs.svelte";
</script>

<div class="slot-div">
    <Breadcrumbs></Breadcrumbs>
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
    .slot-div
    {
        overflow-y: hidden;
    }
</style>