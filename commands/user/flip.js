const Discord = require('discord.js');

module.exports = {
    name: 'flip',
    description: 'Basic Chooser',
    execute(message, args) {
        if (args.length == 0) {
            const choice = Math.random() < 0.5 ? 'heads' : 'tails';
            const exampleEmbed = new Discord.MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`!flip`)
                .setDescription(`It's ${choice}`)
                .setTimestamp()
                .setFooter('CloudStudentBot');
            message.channel.send(exampleEmbed);
        }
    }
};
