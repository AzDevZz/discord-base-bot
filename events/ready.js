const Discord = require("discord.js");
const Client = require("../utils/run");
const SlashCommand = require("../utils/SlashCommand");

/**
 * @param {Client} bot 
 */

module.exports = async (bot) => {

    SlashCommand(bot);

    bot.user.setStatus("online");
    bot.user.setActivity("Discord bot base by Az", {type: Discord.ActivityType.Watching});

    console.log(`🤖 [Bot initialised]`);
}