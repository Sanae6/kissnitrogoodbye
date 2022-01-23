# kissnitrogoodbye

Simple bot that kicks anyone who sends a message with a Discord Nitro URL in it.

Uses [eris](https://github.com/abalabahaha/eris) and [stop-discord-phishing](https://github.com/nikolaischunk/stop-discord-phishing/).

## Installation
Step 1: Have [node](https://nodejs.org/en/download/) installed (use lts)
Step 2: `npm i` on first run to install packages.
Step 3: Enter your token and an audit log reason in the `config.json` file.
Step 4: `node index.js` to start the bot. Use [forever](https://github.com/foreversd/forever) (`forever start index.js`) to keep the bot running.
Step 5: Profit 😎
