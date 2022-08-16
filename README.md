# Eris Addons
- A powerful addon to the eris library.
## Installation
```
npm i eris-addons
```
## Examples
- Embed
~~~javascript
const ErisAddons = require('eris-addons');
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
~~~
- Button
~~~javascript
const ErisAddons = require('eris-addons');
const {Client} = require('eris');
const client = new Client('bot token');

client.on('messageCreate', message => {
    if(message.content.toLowerCase() === '!button') {
        const button = new ErisAddons.Button();
        button.setStyle('DANGER');
        button.setLabel('OMG, click this');
        button.setCustomID('https://discord.gg/7UeV8jFz6m');

        message.channel.createMessage(button.build('Click this!'));
    }
});
~~~
- Select Menu
~~~javascript
const ErisAddons = require('eris-addons');
const {Client} = require('eris');
const client = new Client('bot token');

client.on('messageCreate', message => {
    if(message.content.toLowerCase() === '!selectmenu') {
        const menu = new ErisAddons.SelectMenu();
        menu.setPlaceholder('Select this');
        menu.addOption('Oh, click this', 'Click this for select', 'option value', '🔥');
        menu.addOption('Another option', 'Click this for select', 'option value 2', '💧');
        menu.setCustomID('select');

        message.channel.createMessage(menu.build('Click this'));
    }
});
~~~
- Attachment
~~~javascript
const ErisAddons = require('eris-addons');
const {Client} = require('eris');
const client = new Client('bot token');

client.on('messageCreate', message => {
    if(message.content.toLowerCase() === '!attachment') {
    const Attachment = new ErisAddons.Attachment()
    Att.setFile('./example/file.png')
    Att.setName('file.png')

     const embed = new ErisAddons.Embed();
       embed.setAuthor(message.author.username, message.author.avatarURL);
       embed.setTitle('Title of embed');
       embed.setDescription('Description of embed');
       embed.setColor('0x7289DA');
       embed.setImage('attachment://file.png')
       embed.setFooter(message.author.username, message.author.avatarURL);
       embed.setTimestamp();
    
       message.channel.createMessage({file: Attachment, embeds: [embed] });
    }
});
