const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'statut',
  description: 'Statut du bot',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`🛑Erreur critique`)
      .setColor('#ed2224')
      .setDescription('Mise à jour échouée. La réponse n’est pas une réponse JSON valide.')
      .addField(`🔗 Liens:`,`- [Site web](https://cracks-games.site)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | Cracks Games Web`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}