const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'statut',
  description: 'Statut du bot',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:wave: Hello ! Je suis actuellement en maintenance !`)
      .setColor('#2F3136')
      .setDescription('Je suis actuellement en phase de test et de développement, donc je peux dysfonctionné a des moment !')
      .setDescription('Voici mon statut en temps real: https://bit.ly/3iolfgM')
      .addField(`🔗 Liens:`,`- [Support](https://discord.gg/UZNTK2m8E4)\n- [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=1046120533521092639&permissions=8&scope=bot)`,true)
      .setTimestamp()
      .setFooter({

        text: `Modoration`,
        iconURL: `https://cdn.discordapp.com/attachments/1046126163082346666/1046138545326264382/bot.png`
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}