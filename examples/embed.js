const ErisAddons = require('../index');
const {Client} = require('eris');
const client = new Client('bot token');

client.on("messageCreate", message => {
    if (message.content === "!embed") {
        const embed = new ErisAddons.Embed();
        embed.setAuthor(message.author.username, message.author.avatarURL);
        embed.setTitle('Title of embed');
        embed.setDescription('Description of embed');
        embed.addField('The field\'s name of embed', 'The field\'s description of the embed');
        embed.setColor('0x7289DA');
        embed.setThumbnail(message.author.avatarURL);
        embed.setFooter(message.author.username, message.author.avatarURL);
        embed.setTimestamp();
    
        message.channel.createMessage(embed.build('Hello, world!'));
    }
});