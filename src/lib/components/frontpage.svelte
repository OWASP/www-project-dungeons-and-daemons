

<div class="frontpage">
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
    <div class="img-container">
        <img src="/images/games/azure-cloud-castle.jpg" alt="Adventurers standing in front of the Azure Cloud Castle"/>
    </div>
</div>


<style>
    .img-container {
        text-align: right;
        float: right;
        width: 50%;
        flex:1;
    }

    .text-container {
        text-align: left;
        float: left;
        height: 100%;
		width: 50%;
		opacity: 80%;
        flex:1;
        z-index: 50;
    }

    img {
		height: 100%;
		width: 100%;
		object-fit: cover;
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
    }

    @media (max-aspect-ratio: 1/1) 
    {
        .frontpage
        {
            flex-direction: column;
        }

		.img-container {
			width: 90%;
			padding: 0;
			margin: auto;
		}

		.text-container {
			padding: 1rem;
			height: 100%;
			width: calc(100% - 2rem);
		}
    }
</style>
