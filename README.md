# Eris Addons
- A powerful addon to the eris library.
## Installation
```
npm i eris-addons
```
## Examples
- Embed
~~~javascript
const ErisAddons = require('eris-addons')
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
~~~
- Button
~~~javascript
const ErisAddons = require('eris-addons')
const { Client } = require('eris')
const client = new Client('bot token')

client.on('messageCreate', message => {
    if(message.content.toLowerCase() === '!button') {
        const button = new ErisAddons.Button()
        .setStyle('DANGER')
        .setLabel('OMG, click this')
        .setCustomID('https://discord.gg/7UeV8jFz6m')

        message.channel.createMessage(button.build('Click this!'))
    }
})
~~~
- Select Menu
~~~javascript
const ErisAddons = require('eris-addons')
const {Client} = require('eris')
const client = new Client('bot token')

client.on('messageCreate', message => {
    if(message.content.toLowerCase() === '!selectmenu') {
        const menu = new ErisAddons.SelectMenu()
        .setPlaceholder('Select this')
        .addOption('Oh, click this', 'Click this for select', 'option value', '🔥')
        .addOption('Another option', 'Click this for select', 'option value 2', '💧')
        .setCustomID('select')

        message.channel.createMessage(menu.build('Click this'))
    }
})
~~~