const ErisAddons = require('../index')
const { Client } = require('eris')
const client = new Client('bot token')

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '!button') {
        const button = new ErisAddons.Button()
            .setStyle('DANGER')
            .setLabel('OMG, click this')
            .setCustomID('https://discord.gg/7UeV8jFz6m')

        message.channel.createMessage(button.build('Click this!'))
    }
})