const PermissionCheck = require('../static/permissions');

module.exports = {
    name: 'ban',
    description: 'Banner',
    execute(message, args) {
        if(!PermissionCheck.permissionCheck(message)) return;
        const member = message.mentions.members.first();
        message.delete()
        member.kick(args.splice(1).join(' '));
        message.channel.send(`Banned ${member}. Reason: ${args.splice(1).join(' ')}`);
    }
};
