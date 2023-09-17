const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'info',
  description: 'Informations sur le bot',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:pushpin: Voici quelques information sur moi !`)
      .setColor('#005a45')
      .setDescription('Je suis un robot 100% français:flag_fr:, codé et crée par Mitannie#9948 en Javascript. Je sert principalement a aidé le staff avec le site web de France Logistique "https://france-logistique-tmp.fr", Mais je donne aussi des informations sur le serveur et autres.')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}
