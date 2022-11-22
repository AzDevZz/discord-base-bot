const Discord = require("discord.js");
const Client = require("../utils/run");

/**
 * @param {Client} bot 
 * @param {Discord.Interaction} interaction 
 */

module.exports = async (bot, interaction) => {
    if(interaction.type === Discord.InteractionType.ApplicationCommand) {

        let command = bot.commands.get(interaction.commandName);
        command.run(bot, interaction, interaction.options);
    }
};