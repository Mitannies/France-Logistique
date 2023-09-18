const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'don',
  description: 'Faire un dons',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:tada: Vous souhaiter faire un don ?`)
      .setColor('#ed2224')
      .setDescription(':information_source: Je suis dessoler, je ne prend pas encore les  don !')
      .addField(`🔗 Liens:`,`- [Site web](https://cracks-games.site)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | Cracks Games Web`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}