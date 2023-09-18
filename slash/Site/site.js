const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'site',
  description: 'Site Web de Cracks Games',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:information_source: Voici le site officiel de Cracks Games`)
      .setColor('#ed2224')
      .setDescription(':pushpin: https://cracks-games.site')
      .addField(`🔗 Liens:`,`- [Site web](https://cracks-games.site)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | Cracks Games Web`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}