<script>
    import Frontpage from "$lib/components/frontpage.svelte";
</script>
<h1>OWASP® Dungeons & Daemons</h1>
<p>
    <Frontpage/>
</p>

<style>
    h1
    {
        padding : .5rem;
        background-color: var(--white);
        color: var(--background)
    }

    a,p
    {
        color:white;
        opacity: 90%;
        text-shadow: 0 .5rem rgba(0, 0, 0, 0.541);
        font-size: 1.3rem;
        font-family: var(--font-body);
    }
</style>