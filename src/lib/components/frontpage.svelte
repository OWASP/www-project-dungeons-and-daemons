

<div class="frontpage">
    <div class="img-container">
        <img src="/images/games/defcon-is-canceled.jpg" alt="Adventurers standing in front of the Azure Cloud Castle"/>
    </div>
    <div class="text-container">
        <p>
            OWASP® Dungeons & Daemons is a collection of open source games for promoting awareness and knowledge about application security and security practices.
        </p>
        <p>
            The main purpose is to provide a collection of fun and exciting security related LRP games that can be run at conferences, chapter meetings or other type of events.  
        </p>
        <p>
            Although the project was inspired by OWASP Cornucopia and Dungeons & Dragons, it does not necessarily use OWASP Cornucopia cards or game rules nor do the games necessarily follow the rules used in Dungeon & Dragon. Some of the the games may also be under development. If so, that is indicated on each game's indivual game page. See the rules for each game to get to know how to play the game in question.
        </p>
    </div>
    
</div>


<style>
    .img-container {
        text-align: right;
        float: right;
        width: auto;
        min-width: 456px;
        flex: 0 0 456px;
        display: flex;
        align-items: stretch;
        overflow: hidden;
    }

    .text-container {
        text-align: left;
        float: left;
        height: 100%;
		width: auto;
		opacity: 80%;
        min-width: 0;
        flex: 1 1 auto;
        z-index: 50;
    }

    img {
        height: 100%;
        width: 100%;
        min-width: 100%;
        max-height: 590px;
        object-fit: cover;
        object-position: center;
		border-radius: .3rem;
	}

    .frontpage
    {
        width: 90%;
		margin: auto;
		padding: 0rem;
		display: flex;
		padding-top: 2rem;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
        gap: 1.5rem;
        align-items: stretch;
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .frontpage
        {
            flex-direction: column;
            width: calc(100% - 2rem);
            gap: 1rem;
        }

		.img-container {
            float: none;
            order: 1;
			width: 100%;
            min-width: 0;
            flex: none;
			padding: 0;
			margin: 0;
		}

		img {
			min-width: 0;
			max-height: none;
		}

		.text-container {
            float: none;
            order: 2;
			padding: 1rem;
			height: 100%;
            width: auto;
		}
    }
</style>
