/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/
const { ApplicationCommandOptionType } = require('discord.js');
const db = require("../mongoDB");

module.exports = {
  name: "help",
  description: "Get information about bot and commands.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder, ActionRowBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

      const embed = new EmbedBuilder()
        .setColor(client.config.embedColor)
        .setTitle("You wanna know about me ?")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("__**Here are the available commands:**__\n\n**Play**: stream a song from given link or text\n**Stop**: makes the bot stop playing music\n**Queue**: view and manage the song queue\n**Skip**: skip the current song\n**Pause**: pause the currently playing song\n**Resume**: resume the paused song\n**Loop**: toggle loop mode\n**Ping**: check the bot's latency\n**Clear**: clear the song queue\n**Autoplay**: enable or disable autoplay")
        .setImage(`https://cdn.discordapp.com/attachments/1150511925147476128/1151469732604678185/standard.gif`)
        .setTimestamp();
      const button1 = new ButtonBuilder()
      .setLabel('YouTube')
      .setURL('https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A')
      .setStyle(ButtonStyle.Link);

    const button2 = new ButtonBuilder()
      .setLabel('Discord')
      .setURL('https://discord.gg/FUEHs7RCqz')
      .setStyle(ButtonStyle.Link);
      
    const button3 = new ButtonBuilder()
      .setLabel('Code')
      .setURL('https://replit.com/@BEASTGAMERS1?tab=community')
      .setStyle(ButtonStyle.Link);
      
    const row = new ActionRowBuilder()
      .addComponents(button1, button2, button3);

      interaction.reply({ embeds: [embed], components: [row] }).catch(e => {});

    } catch (e) {
    console.error(e); 
  }
  },
};
/*

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   
   # MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE
   ## FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/FUEHs7RCqz ]
   ## YT : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A
*/