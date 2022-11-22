const Discord = require("discord.js");

module.exports = {
    name: "exemple",
    description: "Say a text",
    dm: false,
    permission: null,
    options: [
        {
            type: "String", // It is important to capitalize the first letter of the option type!
            name: "text", // The text that the bot must say (this is an example),
            description: "The text that the bot must say", // The description of the option
            required: true, // the option is obligatory ?
        }
    ],

    async run(bot, message, args) {

        let text = args.getString("text") // we get the value of the option
        message.reply(text); // the bot say the text !
    }
}