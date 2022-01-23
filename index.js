const Eris = require("eris");
const sdp = require("stop-discord-phishing");
const config = require("./config.json");
const bot = new Eris(config.token);

bot.on("messageCreate", async msg => {
    if (msg.member === undefined) return;
    const isSus = await sdp.checkMessage(msg.content);
    if (isSus) {
        console.log(`Banned ${msg.member.username}#${msg.member.discriminator}`)
        await msg.member.ban(1, config.banReason);
    }
})

bot.connect();