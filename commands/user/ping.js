module.exports = {
    name: 'ping',
    description: 'Pongs',
    execute(message, args) {
        message.channel.send(`🏓 PONG! ~${message.createdTimestamp - Date.now()}ms`);       
    }
};
