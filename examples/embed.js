const ErisAddons = require("eris-addons");
const {Client} = require("eris");
const client = new Client("bot token");

client.on("messageCreate", message => {
    if (message.content === "!embed") {
        const embed = new ErisAddons.Embed();
        embed.setAuthor(message.author.username, message.author.avatarURL);
        embed.setTitle("Title of embed");
        embed.setDescription("Description of embed");
        embed.setColor("0x7289DA");
        embed.setThumbnail(message.author.avatarURL);
        embed.addField("The field's name of embed", "The field's description of the embed");
        embed.setFooter(message.author.username, message.author.avatarURL);
        embed.setTimestamp();
    
        message.channel.createMessage({
            content: 'Hello, world!',
            embeds: [embed]
        }); //or try this: message.channel.createMessage(embed.build("Hello, world!"));
    }
});