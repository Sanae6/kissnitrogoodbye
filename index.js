const Eris = require("eris");
const sdp = require("stop-discord-phishing");
const config = require("./config.json");
const bot = new Eris(config.token);

bot.on("messageCreate", async msg => {
    const isSus = await sdp.checkMessage(msg.content);
    if (isSus) {
        console.log(`Removed message from ${msg.author.username}#${msg.author.discriminator}`);
        await msg.delete(config.reason);

        // Only dm them once at most, avoid repeats.
        if (msg.member === undefined) return;
        const invite = await msg.channel.createInvite({
            unique: true,
            maxUses: 1,
            reason: config.reason
        });
        const privChannel = await msg.author.getDMChannel();
        await privChannel.createMessage("Kicked for sending a scam link. Reset your password, enable two factor authentication on your account." +
            `You can rejoin using this invite: https://discord.gg/${invite.code}`);
        await msg.member.kick(config.reason);
    }
});

bot.connect();