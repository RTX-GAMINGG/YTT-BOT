const db = require("../mongoDB");
module.exports = {
name: "resume",
description: "Start paused music.",
permissions: "0x0000000000000800",
options: [],
voiceChannel: true,
run: async (client, interaction) => {
const queue = client.player.getQueue(interaction.guild.id);

try {

    if (!queue) return interaction.reply({ content: '⚠️ Queue is empty!!', ephemeral: true }).catch(e => { })
    if(!queue.paused) return interaction.reply({ content: '⚠️ No paused music!!', ephemeral: true }).catch(e => { })
    const success = queue.resume()
    return interaction.reply({ content: success ? `🟢 Song resumed!!` : 'Error' }).catch(e => { })

} catch (e) {
    console.error(e); 
  }
},
};
