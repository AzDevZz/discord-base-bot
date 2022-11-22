const Discord = require("discord.js");
const fs = require("fs");
const Client = require("./utils/run");
const bot = new Client();

bot.run("your_bot_token","./commands", "./events");


const loadCommands = async (dir = bot.commandFilePath) => {
    let command = fs.readdirSync(dir).filter(file => file.endsWith(".js"));

    for(const file of command) {

        let cmd = require(`${dir}/${file}`);
        bot.commands.set(cmd.name, cmd);
        console.log(`✅ [${cmd.name} command loaded !]`);
    };
};

const loadEvents = async (dir = bot.eventFilePath) => {
    let event = fs.readdirSync(dir).filter(file => file.endsWith(".js"));

    for(const files of event) {

        let evt = require(`${dir}/${files}`);
        bot.on(files.split(".js").join(""), evt.bind(null, bot));
        console.log(`✅ [${files.split(".js").join("")} event loaded !]`);
    };
};

loadCommands();
loadEvents();