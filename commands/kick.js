const PermissionCheck = require('./permissions');

module.exports = {
    name: 'kick',
    description: 'Kicker',
    execute(message, args) {
        if(!PermissionCheck.permissionCheck(message)) return;
        const member = message.mentions.members.first();
        const reason = args.splice(1).join(' ');
        member.kick(reason);
        message.channel.send(`Kicked ${member}. Reason: ${reason}`);
    }
};
