<script>
    export let src;
    export let alt;
</script>

<img src="{src}" alt="{alt}">
<style>
    img
    {
        display: block;
        width : 100%;
        border-radius: .25rem;
        margin:auto;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        img
        {
            width : 50%;
        }
    }
</style>