const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

const WordFilter = require('./commands/static/init');
const prefix = '!';
require('dotenv').config();

const glob = require('glob');

client.login(process.env.TOKEN);
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

glob("./commands/*/*.js",{}, (err, files) => {
    for (const file of files) {
        const command = require(file);
        client.commands.set(command.name, command);
    }
});

//Init filter
const filters = ['shit', 'cunts', 'fuck', 'ass'];
WordFilter.words = filters;

client.on('message', msg => {
    if (msg.author.bot) 
        return;

    //Commands
    if (msg.content.startsWith(prefix)) {
        try {
            const args = msg.content.slice(prefix.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();
            client.commands.get(command).execute(msg, args);
            return;
        } catch (error) {
            console.log(error);
        }
    }

    //Channel specific commands
    if (msg.channel.id === '804077282494251029') {
        //TODO GAME
    }

    //Bad word checker
    try {
        client.commands.get('msg').execute(msg, client);
    } catch (error) {
        console.error(error);
    }
});

//client.destroy()