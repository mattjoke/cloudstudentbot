const Discord = require('discord.js');
const WordFilter = require('../static/init');

module.exports = {
    name: 'choose',
    description: 'Basic Chooser',
    execute(message, args) {
        if (args.length == 2) {
            if (WordFilter.checkWord(args[0]) || WordFilter.checkWord(args[1]))
                return;

            const choice = Math.random() < 0.5 ? args[0] : args[1];
            const exampleEmbed = new Discord.MessageEmbed().setColor('#0099ff').setTitle(`!choose ${
                args[0]
            } or ${
                args[1]
            }`).setDescription(`I choose ${choice}`).setTimestamp().setFooter('CloudStudentBot');

            message.channel.send(exampleEmbed);
        }
    }
};
