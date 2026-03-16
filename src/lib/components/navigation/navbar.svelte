<script lang="ts">
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import SteelText from "$lib/components/navigation/SteelText.svelte";
    import { AddLink, type Link } from "./utils";
    import { readTranslation } from "$lib/stores/stores";
    let t = readTranslation();
    let width = $state(0);
    let height = $state(0);
    let isMobileAspect = $derived(width <= height);

    let mainMenu : Link[] = [];
    let subMenu : Link[] = [];



    AddLink(mainMenu,"Games","/games");
    AddLink(mainMenu,"Cheat sheets","/cheatsheets");
    AddLink(mainMenu,"How to play","/rules");
    AddLink(mainMenu,"Characters","/characters");
    AddLink(mainMenu,"Sponsors","/sponsors");
    AddLink(mainMenu,"About","/about");

    function toggleMenu()
    {
        const menuButtons = document.querySelectorAll<HTMLInputElement>('.mobile-nav-button');
        for (const item of menuButtons) item.checked = false;
    }

</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />
<header id="menu">
    <nav>
        <div id="mobile-menu">
            <input class="mobile-nav-button" in:fade type="checkbox" />
            <ul class="mobile-menu">
                <li>
                    <ul>
                        {#each [...mainMenu].reverse() as link}
                        <li>
                            <button class="link-mobile" onclick={()=>{toggleMenu();goto(link.href)}}><SteelText text={link.name} /></button>
                        </li>
                        {/each}
                        
                        {#each [...subMenu].reverse() as link}
                        <li>
                            <button class="link-mobile" onclick={()=>{toggleMenu();goto(link.href)}}><SteelText text={link.name} /></button>
                        </li>
                        {/each}
                        
                    </ul>
                </li>
            </ul>
        </div>
        <ul class="desktop-menu">
            {#each mainMenu as link}
                <li class="general-menu">
                    <a class="link" href="{link.href}"><div><SteelText text={link.name} /></div></a>
                </li>
            {/each}
                <!--
                <li class="sub-menu">
                    <a in:fade class="link get-game" href="#menu"><div>{$t('getthegame.title')}</div></a>
                    <div>
                        <ul class="sub-menu">
                        {#each subMenu as link}
                             <li><a class="link sub-menu" href="{link.href}"><div>{link.name}</div></a></li>
                        {/each}
                        </ul>
                    </div>
                </li>
                -->
            </ul>
        <a class="logo" href="/"><div>{#if !isMobileAspect}<SteelText class="logo-owasp" text="OWASP" />&nbsp;{/if}<SteelText class="logo-title" text="Dungeons & Daemons" /></div></a>
        
    </nav>
</header>

<style>
    * {margin: 0;outline: none;padding-inline-start: 0;-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
    *:after, *:before { -webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;}
    nav {  display: block;}

    header {
        
		position: sticky;
		width: 100%;
		z-index: 100;
	}

    header > nav {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
        justify-content: space-between;
    }
	
	header > nav > ul {
        display: flex;
		list-style: none;
        padding: 0;
	}
	
    header > nav > ul > li {
        flex: 0 1 auto;
        margin: 0;
        position: relative;
        transition: all linear 0.1s;
        white-space: nowrap;	
    }
    
    header > nav > ul > li a + div {
        border-radius: 0 0 2px 2px;
        font-size: 1vw;
        top: 3.2rem;
        width: 14vw;
    }
			
    header > nav > ul > li:hover a + div {
        display: block;
    }

    ul.sub-menu > li > a > div {
        padding: 0.5vw;
    }
    
    header > nav > ul > li a + div > ul {
        display: flex;
        list-style-type: none;
        height: 20vw;
        border-radius: 0 0 2px 2px;
        background-color: #1c1c1c;
        border: 2px white solid;
        
    }
				
    header > nav > ul > li a + div > ul > li {
        margin: 0;
        flex-direction: column;
    }
					
    header > nav > ul > li a + div > ul > li > a {
        letter-spacing: 0.15vw;
        padding: 0.25vw 1.5vw;
    }
	
    header > nav > ul > li > a {
        max-width: 15vw;
        padding: 1vw 1.5vw;
    }


    .get-game {
        text-align: top;
        background-color: #1c1c1c;
    }
    

    .link-mobile
    {
        text-decoration: none;
        font-size: 2rem;
        width : 100%;
        font-family: var(--font-title);
        text-align: center;
        padding-top: 0;
        padding-bottom: 0;
        border-bottom: 1px rgba(255, 255, 255, 0.203) solid;
    }
    .link-mobile:hover {
        opacity: 50%;
    }

    .mobile-nav-button {
        --nav-icon-mask: url('/icons/menu.png');
        --nav-icon-size: 2.95rem;
        appearance: none;
        -webkit-appearance: none;
        display: inline-flex;
        width: 4.45rem;
        height: 4.45rem;
        min-width: 4.1rem;
        min-height: 4.1rem;
        flex: 0 0 4.45rem;
        padding: 0;
        align-self: flex-end;
        background-color: transparent;
        background-image:
            linear-gradient(180deg, rgba(255, 255, 255, 0.18) 0%, rgba(255, 255, 255, 0.04) 100%),
            url('/images/steel.jpg');
        background-position: center;
        background-repeat: no-repeat, repeat;
        background-size: 100% 100%, 220px 220px;
        background-blend-mode: screen, normal;
        border: none;
        border-radius: 0;
        cursor: pointer;
        -webkit-mask-image: var(--nav-icon-mask);
        mask-image: var(--nav-icon-mask);
        -webkit-mask-position: center;
        mask-position: center;
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        -webkit-mask-size: var(--nav-icon-size) var(--nav-icon-size);
        mask-size: var(--nav-icon-size) var(--nav-icon-size);
        filter: drop-shadow(0 1px 0 rgba(255, 255, 255, 0.22)) drop-shadow(0 2px 3px rgba(0, 0, 0, 0.45));

    }

    .mobile-nav-button:checked {
        --nav-icon-mask: url('/icons/close.png');

    }

    .mobile-nav-button:hover {
        opacity: 50%;
    }

    #mobile-menu
    {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        
    }
    .mobile-menu {
        width : 100%;
        margin-top: 0.9rem;
        height : 30rem;
        background-color: var(--background);
        z-index: 100;
        border-radius: 0 0 10px 10px;
        padding-bottom: 1rem;
        padding: 0 1rem 1rem;
        
    }
    

    input + ul.mobile-menu
    {
        display: none;
        -webkit-animation: fadeOutFromNone 0.5s ease-out;
        -moz-animation: fadeOutFromNone 0.5s ease-out;
        -o-animation: fadeOutFromNone 0.5s ease-out;
        animation: fadeOutFromNone 0.5s ease-out;
    }

    button
    {
        background: none;
        border: none;
        float: right;
        padding-left: 1vw;
        padding-top: 0.5rem;
    }

    .link
    {
        float:right;
        text-decoration: none;
        padding-left: .4vw;
        padding-right: .4vw;
        padding-top: .5rem;
        font-size: 1.5vw;
        margin-top: 1rem;
        transition: var(--transition);
        font-weight: bold;
    }
    .general-menu
    {
        padding-top: 0.25rem;
    }

    .get-game
    {
        border: 2px white solid;
        padding : .5rem;
        margin-right: 1.5rem!important;
        min-width: 14vw;
    }
    .get-game:hover
    {
        text-decoration: none!important;
        background-color: white;
        color:black;
    }

    .get-game + div
    {
        display: none;
    }

    .get-game:hover + div
    {
        display: block;
    }

    ul.sub-menu {
        padding-inline-start: 0;
        flex-direction: column;
    }

    a.sub-menu {
        font-size: 1.3vw;
        margin-left: 0.2vw;
        padding: 0;
        width: 100%;
        border-radius: 0rem;
    }

    a.sub-menu:hover {
        opacity: 100%;
        
    
        color: #1c1c1c;
    }

    .link:hover
    {
        opacity: 50%;
    }

    .logo {
        margin-top: 0.7rem;
        width : 50vw;
        max-width: 50vw;
        font-size: 3vw;
        padding: 1rem;
        font-weight: bold;
        text-decoration: none;
        transition: var(--transition);
        text-transform: uppercase;
        white-space: pre;
        overflow: hidden;
        
    }

    header > nav > .logo > div {
        bottom: 1vw;
        position: relative;
        min-width: 18rem;
    }


    .logo:hover
    {
        opacity: 50%;
    }
    
    nav
    {
        width : 100%;
        height : 5rem;
        background-color: #1c1c1c;
        border-bottom: 1px var(--white) solid;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .desktop-menu {
            display: none;
        }

        #mobile-menu
        {
            display: flex;
        }

        input:checked + ul.mobile-menu
        {
            display: flex;

            -webkit-animation: fadeInFromNone 0.5s ease-out;
            -moz-animation: fadeInFromNone 0.5s ease-out;
            -o-animation: fadeInFromNone 0.5s ease-out;
            animation: fadeInFromNone 0.5s ease-out;
        }

        :global(.logo-title)
        {
            display: inline-block;
            font-size: 6vw;
        }
        .logo {
            margin-top: 0.4rem;
            overflow: visible;
        }

        ul, ol {
            list-style-type: none; 
        }

        @-webkit-keyframes fadeInFromNone {
            0% {
                display: none;
                opacity: 0;
            }

            1% {
                display: flex;
                opacity: 0;
            }

            100% {
                display: flex;
                opacity: 1;
            }
        }

        @-moz-keyframes fadeInFromNone {
            0% {
                display: none;
                opacity: 0;
            }

            1% {
                display: flex;
                opacity: 0;
            }

            100% {
                display: flex;
                opacity: 1;
            }
        }

        @-o-keyframes fadeInFromNone {
            0% {
                display: none;
                opacity: 0;
            }

            1% {
                display: flex;
                opacity: 0;
            }

            100% {
                display: flex;
                opacity: 1;
            }
        }

        @keyframes fadeInFromNone {
            0% {
                display: none;
                opacity: 0;
            }

            1% {
                display: flex;
                opacity: 0;
            }

        }
    }




</style>