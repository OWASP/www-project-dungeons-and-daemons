<script lang="ts">
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import { AddLink, type Link } from "./utils";
    import { page } from "$app/stores";
    let width: number;
    let height: number;
    let mobile: boolean = false;
    let menuOpen : boolean = false;

    let links : Link[] = [];
    AddLink(links,"Cheat sheets","/cheatsheets");
    AddLink(links,"How to play","/rules");
    AddLink(links,"About","/about");
    AddLink(links,"Characters","/characters");
    AddLink(links,"Games","/games");

    function getMobile(w: number, h: number) {
        mobile = w / h < 1;
    }


    function toggleMenu()
    {
        menuOpen = !menuOpen;
        if(menuOpen)
        {
            document.body.style["overflow"] = "hidden"
        }
        else
        {
            document.body.style["overflow"] = "auto"
        }
    }


$: getMobile(width, height);


</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

<nav>
    <a class="logo" href="/">OWASP® D&D</a>
    {#if mobile}
        {#if menuOpen}
            <button in:fade on:click={toggleMenu}><img alt="button to close the menu" src="/icons/close.png"/></button>
        {:else}
            <button in:fade on:click={toggleMenu}><img alt="button to open the menu" src="/icons/menu.png"/></button>
        {/if}
    {:else}
        {#each links as link}
            <a class="link" href="{link.href}">{link.name}</a>
        {/each}
    {/if}
</nav>

{#if menuOpen}
    <div class="mobile-menu">
        {#each [...links].reverse() as link}
            <button class="link-mobile" on:click={()=>{toggleMenu();goto(link.href)}}>{link.name}</button>
        {/each}
    </div>
{/if}

<style>

    .link-mobile
    {
        color:var(--white);
        text-decoration: none;
        font-size: 2rem;;
        display: none;
        width : 100%;
        font-family: var(--font-title);
        text-align: center;
        padding-top: 0rem;
        padding-bottom: 0rem;
        border-bottom: 1px rgba(255, 255, 255, 0.203) solid;
    }
    .mobile-menu
    {
        position: fixed;
        width : 100%;
        height : 100%;
        background-color: var(--background);
        z-index: 100;
    }
    button
    {
        background:none;
        border:none;
        float:right;
        margin:1rem;
    }
    img
    {
        width : 3rem;
    }
    .link
    {
        float:right;
        color:white;
        font-family: var(--font-title);
        text-decoration: none;
        padding: .5rem;
        font-size: 1.5rem;
        margin-left:.2rem;
        margin-right:.2rem;
        margin-top: 1rem;
    }

    .link:hover
    {
        text-decoration: underline;
    }

    .logo
    {
        display:inline-block;
        width : 20rem;
        text-decoration: none;
        margin:0;
        font-size: 3rem;
        padding: 1rem;
        font-family: var(--font-title);
        color: var(--white);
    }

    .logo:hover
    {
        text-decoration: underline;
    }
    
    nav
    {
        width : 100%;
        height : 5rem;
        background-color: var(--background);
        border-bottom: 1px var(--white) solid;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .link-mobile
        {
            display: block;
        }

        .link
        {
            display:none;
        }
    }
</style>