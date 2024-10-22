# OWASP® Dungeons & Daemons

<img src="static/images/games/azure-cloud-castle.jpg" />

OWASP® Dungeons & Daemons is a collection of open source games for promoting awareness and knowledge about application security and security practices.

The main purpose is to provide a collection of fun and exciting security related games that can be run at conferences, chapter meetings or other type of events.

Although the project was inspired by OWASP Cornucopia and Dungeons & Dragons, it does not necessarily use OWASP Cornucopia cards or game rules nor do the games necessarily follow the rules used in Dungeon & Dragon. Some of the the games may also be under development. If so, that is indicated on each game's indivual game page. See the rules for each game to get to know how to play the game in question.

Please visit: [https://dungeonsanddaemons.org/](https://dungeonsanddaemons.org/)

## Get the raw data

Please feel free to reuse the raw markdown data in your own projects.
This is the available data:

 - [Games](/games) 
 - [Stories](/stories)
 - [Characters](/characters)
 - [Rules](/rules)
 - [Images](/images)

## License

OWASP® Dungeons & Daemons (c) by the OWASP® Foundation

OWASP® Dungeons & Daemons games and game content is licensed under a
Creative Commons Attribution-ShareAlike 4.0 International License.

You should have received a copy of the license along with this
work. If not, see <https://creativecommons.org/licenses/by-sa/4.0/>.

## Contributing

Please read [contributing](CONTRIBUTING.md)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version:

```bash
npm install          # Install dependencies
npm run build        # Build production version

# Open site in default browser
xdg-open build/index.html #Linux
open build/index.html # Mac
start build/index.html # Windows
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
