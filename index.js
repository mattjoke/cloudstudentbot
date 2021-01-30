const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const WordFilter = require('./commands/init');
client.commands = new Discord.Collection();

const prefix = '!';

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${
        client.user.tag
    }!`);
});

client.login(process.env.TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

const filters = ['shit'];
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
        } catch (error) {
            console.log(error);
        }
        return;
    }

    //Channel specific commands
    if (msg.channel.id === '804077282494251029') {
        try {
            const command = client.commands.get('msg').execute(msg, client);
        } catch (error) {
            console.error(error);
            msg.reply('there was an error trying to execute that command!');
        }
    }
});
