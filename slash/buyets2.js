const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'buyets2',
  description: 'Obtenir le jeux Euro Truck Simulator 2',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:lock: Vous souhaiter acheter euro truck simulator 2 ? `)
      .setColor('#005a45')
      .setDescription(':pushpin: https://bitly.ws/UTuE')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}