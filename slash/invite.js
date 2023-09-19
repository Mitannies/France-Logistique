const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'invite',
  description: 'Obtenir le lien officiel du serveur',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`» Vous chercher le lien d'invitation officiel ? Le voila !`)
      .setColor('#005a45')
      .setDescription(': https://discord.gg/c5ppqYDdMP')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}