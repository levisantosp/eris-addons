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