module.exports = class PermissionCheck {
    static permissionCheck(message){
        return message.member.hasPermission("ADMINISTRATOR");
    }
}