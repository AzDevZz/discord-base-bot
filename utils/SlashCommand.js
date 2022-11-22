const { SlashCommandBuilder, REST, Routes } = require("discord.js");
const Client = require("./run");

/**
 * @param {Client} bot 
 */

module.exports = async bot => {

    let commands = [];

    bot.commands.forEach(async command => {

        let slashcommand = new SlashCommandBuilder()
        .setName(command.name)
        .setDescription(command.description)
        .setDMPermission(command.dm)
        .setDefaultMemberPermissions(command.permission)
        

        if(command.options?.length > 1) {
            for(let i = 0; i < command.options?.length; i++) {

                slashcommand[`add${command.options[i].type}Option`](o => o.setName(command.options[i].name).setDescription(command.options[i].description).setRequired(command.options[i].required))

            }
        }
        commands.push(slashcommand)
    })

    let rest = await new REST({version: 10}).setToken(bot.token);
    rest.put(Routes.applicationCommands(bot.user.id), {body: commands});
    console.log("</> [SlashCommands have been created]")

    
}
