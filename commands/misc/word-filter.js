const WordFilter = require("../static/init");
const Discord = require('discord.js');

module.exports = {
    name: 'msg',
    description: 'Basic Word Filter',
    execute(message, client) {
        if (WordFilter.checkWord(message.content)) {
			const embed = new Discord.MessageEmbed()
				.setColor('#0099ff')
				.setTitle('Violation of rules detected!')
				.setAuthor('CloudStudentBot - WordFilter')
				.setDescription(`User: ${message.author} \n [Link to post](${message.url})`)
				.setTimestamp()
				.setFooter('At your service!');

            client.channels.cache.get('804729950095540274').send(embed);
        }
    }
};
