<script>
    import Footer from "$lib/components/footer.svelte";
    import Navbar from "$lib/components/navigation/navbar.svelte";

    export let data;
</script>

<div>
    <Navbar></Navbar>
    <div class="slot-container">
        <slot>
            <script>
                import "../app.css"
            </script>
        </slot>
    </div>
    <Footer timestamp={data.timestamp}></Footer>
</div>


<style>
    .slot-container
    {
        min-height: 100vh;
    }

    div
    {
        min-height: 100vh;
        background: radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,.8) 100%),radial-gradient(circle at 5px 5px,#0c0d0d70 2px,#ffffff00 0px,#ffffff00 0px) 0 0 / 8px 8px, linear-gradient(180deg, #222222 0%,#222222 200%);
    }
</style>