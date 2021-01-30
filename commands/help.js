const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Displays help',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Moje príkazy")
            .setAuthor("CloudStudentBot")
            .setColor(0x00AE86)
            .setDescription("Náš bot sa stále vyvíja. Ak máte nápad na nejakú funkciu napíšte nám to do kanálu #bot")
            .addField("!help","zobrazí pomoc")
            .addField("!flip" ,"hodí si mincou")
            .addField("!choose (first) (second)", "vyberie jednu možnosť ")
            .setTimestamp()
        message.channel.send(embed);

        if (args.length == 0) {
            const choice = Math.random() < 0.5 ? 'heads' : 'tails';

        }
    }
};
