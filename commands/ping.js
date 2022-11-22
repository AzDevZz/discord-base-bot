const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Show the bot latency",
    dm: true,
    permission: null,

    async run(bot, message, args) {

        let startBot = Date.now()
        message.deferReply().then(async () => {
            let endBot = Date.now();

            message.editReply(`\`Bot latency\`: ${endBot - startBot}ms\n\`Discord API Latency\`: ${bot.ws.ping}ms`)
        });
    }
}