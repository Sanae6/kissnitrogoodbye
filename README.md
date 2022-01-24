# kissnitrogoodbye

Simple bot that kicks anyone who sends a message with a Discord Nitro URL in it.

Uses [eris](https://github.com/abalabahaha/eris) and [stop-discord-phishing](https://github.com/nikolaischunk/stop-discord-phishing/).

## Installation
- Step 1 Have [node](https://nodejs.org/en/download/) installed (use lts)
- Step 2: `npm i` on first run to install packages.
- Step 3: [Create and name an application](https://discord.com/developers/applications) on the Discord Developer Portal, then copy and keep the application ID from that page - somewhere before continuing.
- Step 4: Go to the bot tab on the left, click Add Bot, then click Copy to copy the token to your clipboard.
- Step 5: Enter your bot's token and an audit log reason in the `config.json` file.
- Step 6: Grab the application ID from step 3 and replace the text `<appid>` with that ID in this URL `https://discord.com/api/oauth2/authorize?client_id=<app id>&permissions=8194&scope=bot` and add the bot. (don't change the permissions, it needs both)
- Step 7: `node index.js` to start the bot. Use [forever](https://github.com/foreversd/forever) (`forever start index.js`) to keep the bot running.
- Step 8: Profit 😎
