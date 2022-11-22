const Discord = require("discord.js");

module.exports = class Client extends Discord.Client {
    constructor(options) {
        super({intents: 3276799});

        this.commands = new Discord.Collection();
    }
    async run(token, commandFilePath, eventFilePath) {

        if(!commandFilePath) throw new TypeError("Please give a folder for the commands !");
        if(!eventFilePath) throw new TypeError("Please give a folder for the events !");
        this.commandFilePath = commandFilePath;
        this.eventFilePath = eventFilePath;
        this.login(token);
    }
}