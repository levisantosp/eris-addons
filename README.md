# Eris Addons
- A powerful addon to the eris library.
## Installation
```
npm i https://github.com/Levi0100/eris-addons
```
## Examples
- Embed
~~~javascript
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
~~~
- Button
~~~javascript
const ErisAddons = require("eris-addons");
const {Client} = require("eris");
const client = new Client("bot token");

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === "!button") {
        const button = new ErisAddons.Button();
        button.setStyle("LINK");
        button.setLabel("OMG, click this");
        button.setURL("https://discord.gg/7UeV8jFz6m");

        message.channel.createMessage({
            content: "Click this",
            components: [button]
        });
    }
});
~~~
- Select Menu
~~~javascript
const ErisAddons = require("eris-addons");
const {Client} = require("eris");
const client = new Client("bot token");

client.on("messageCreate", message => {
    if (message.content.toLowerCase() === "!selectmenu") {
        const menu = new ErisAddons.SelectMenu();
        menu.setPlaceholder("Select this");
        menu.addOption("Oh, click this", "Click this for select", "option value", "🔥");
        menu.addOption("Another option", "Click this for select", "option value 2", "💧");
        menu.setCustomID("select");

        message.channel.createMessage({
            content: "Click this",
            components: [menu]
        });
    }
});
~~~