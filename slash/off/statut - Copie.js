const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'statut',
  description: 'Statut du bot',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:wave: Hello ! Je suis actuellement en maintenance !`)
      .setColor('#ed2224')
      .setDescription('Je suis actuellement en phase de développement, je peux ne pas repondre corectement a votre demande.')
      .addField(`🔗 Liens:`,`- [Site web](https://cracks-games.site)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | Cracks Games Web`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}