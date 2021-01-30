const PermissionCheck = require('../static/permissions');

module.exports = {
    name: 'purge',
    description: 'Basic Purger',
    execute(message, args) {
        if(!PermissionCheck.permissionCheck(message)) return;
        if (args.length == 0) {
            message.channel.bulkDelete();
        } else if (args[0].toLowerCase().trim() == 'all') {
            for (let i = 0; i < 10; i++) 
                message.channel.bulkDelete(99);  
        } else {
            let num = (Number(args[0]) + 1) % 99;
            message.channel.bulkDelete(num);
        }
    }
};
