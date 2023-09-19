const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'faq',
  description: 'FAQ de https://france-logistique-tmp.fr',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:information_source: Voici l'F.A.Q de https://france-logistique-tmp.fr`)
      .setColor('#ed2224')
      .setDescription(':pushpin: https://france-logistique-tmp.fr/faq')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}
