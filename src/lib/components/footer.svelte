<script lang="ts">
    import { onMount } from "svelte";

    export let timestamp : Date;
    let timeAgo : string = '';

    function doOnMount()
    {
        let hours : number =  getHoursSince(timestamp);

        if(hours < 1)
        {
            let minutes = Math.ceil(hours * 60);
            timeAgo = ', or ' + minutes + ' minutes ago'
        }
        else if(hours > 1 && hours < 2)
        {
            timeAgo = ', or 1 hour ago'
        }
        else
        {
            timeAgo = ', or ' + Math.ceil(hours) + ' hours ago'
        }
    }

    function getCurrentDate() : string
    {
        return timestamp.toUTCString() 
    }

    function getHoursSince(input : Date) : number
    {
        let now = new Date()
        let difference = Math.abs(now.getTime() - input.getTime());
        let differenceInHours = difference / (1000 * 3600);
        return differenceInHours;
    }

    onMount(doOnMount)
</script>

<footer>
    <div class="flex-container">
        <div class="box">
            <p class="title">Provided by Johan Sydseter</p>
            <p class="title">OWASP® Dungeons & Daemons</p>
            <p>
                OWASP Dungeons & Daemons is originally created by Johan Sydseter.
                It is open source and can be downloaded free of charge from the <a target='_blank' href="https://owasp.org/www-project-cornucopia/">OWASP website</a>.
                It is is free to use.
                It is licensed under the Creative Commons Attribution-ShareAlike 4.0 International, so you can copy, 
                distribute and transmit the work, and you can adapt it, and use it commercially, 
                but all provided that you attribute the work and if you alter, transform, 
                or build upon this work, 
                you may distribute the resulting work only under the same or similar license to this one.
                OWASP does not endorse or recommend commercial products or services.
                OWASP Dungeons & Daemons is licensed under the Creative Commons Attribution-ShareAlike 4.0 International license and is © 2024 OWASP Foundation.
            </p>
        </div>
    </div>
    <p class="footer">OWASP and the OWASP logo are trademarks of the <a href="https://owasp.org/">OWASP Foundation</a></p>
    <p class="footer">Last update was {getCurrentDate()}{timeAgo}</p>
    <p class="footer"><a href="/about#license">Licensing information</a></p>
</footer>


<style>
    .footer
    {
        width : calc(100% - 2rem);
        text-align: center;
    }
    a
    {
        color:var(--white);
    }

    a:hover
    {
        font-weight: bold;
        color:var(--green)
    }

    .title
    {
        font-size: 1.5rem;
        text-decoration: underline;
        font-family: var(--font-title);
    }

    p
    {
        color: white;
        font-family: var(--font-body);
        margin-top:.5rem;
        margin-bottom:.5rem;
    }
    .box
    {
        margin:1rem;
        flex:1;
    }

    .flex-container
    {
        display: flex;
        flex-direction: row;
        align-items: stretch;

    }
    footer
    {
        border-top: 1px solid var(--white);
        width : calc(100% - 2rem);
        background-color: var(--background);
        padding: 1rem;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .flex-container
        {
            flex-direction: column;
        }

        .box
        {
            width : 90%;
            margin-bottom: 2rem;
        }
    }
</style>