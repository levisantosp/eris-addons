const ErisAddons = require('../index')
const { Client } = require('eris')
const client = new Client('bot token')

client.on('messageCreate', message => {
    if (message.content.toLowerCase() === '!selectmenu') {
        const menu = new ErisAddons.SelectMenu()
            .setPlaceholder('Select this')
            .addOption('Oh, click this', 'Click this for select', 'option value', '🔥')
            .addOption('Another option', 'Click this for select', 'option value 2', '💧')
            .setCustomID('select')

        message.channel.createMessage(menu.build('Click this'))
    }
})