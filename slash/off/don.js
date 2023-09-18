const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'don',
  description: 'Faire un don',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:tada: Vous souhaiter faire un don ?`)
      .setColor('#2F3136')
      .setDescription(':information_source: Je suis dessoler, je ne prend pas encore les  don !')
      .addField(`🔗 Liens:`,`- [Support](https://discord.gg/UZNTK2m8E4)\n- [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=1046120533521092639&permissions=8&scope=bot)`,true)
      .setTimestamp()
      .setFooter({

        text: `Modoration`,
        iconURL: `https://cdn.discordapp.com/attachments/1046126163082346666/1046138545326264382/bot.png`
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}