<script>
    import CollectionGrid from "$lib/components/collectionGrid.svelte";

    export let data;
</script>

<CollectionGrid items={data.games} basePath="/games" />