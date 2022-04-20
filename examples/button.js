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