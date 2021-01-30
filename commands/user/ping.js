module.exports = {
    name: 'ping',
    description: 'Pongs',
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Pong!")
            .setAuthor("CloudStudentBot")
            .setColor(0x00AE86)
            .setDescription("Náš bot sa stále vyvíja. Ak máte nápad na nejakú funkciu napíšte nám to do kanálu #bot")
            .setTimestamp()
        message.channel.send(embed);       
    }
};
