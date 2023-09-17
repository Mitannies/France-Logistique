const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'hebergeur-info',
  description: 'Les imformations de mon hebergeur',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(` » Voici les informations sur mon hébergeur`)
      .setColor('#005a45')
      .setDescription(':speech_balloon: Mon hébergeur et mon créateur @mitannie, je suis toujours en phase de développement donc pas besoin de serveur.')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}
