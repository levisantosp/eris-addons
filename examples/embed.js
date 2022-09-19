const ErisAddons = require('../index')
const { Client } = require('eris')
const client = new Client('bot token')

client.on("messageCreate", message => {
    if (message.content === "!embed") {
        const embed = new ErisAddons.Embed()
            .setAuthor(message.author.username, message.author.avatarURL)
            .setTitle('Title of embed')
            .setDescription('Description of embed')
            .addField('The field\'s name of embed', 'The field\'s description of the embed')
            .setColor('0x7289DA')
            .setThumbnail(message.author.avatarURL)
            .setFooter(message.author.username, message.author.avatarURL)
            .setTimestamp()

        message.channel.createMessage(embed.build('Hello, world!'))
    }
})