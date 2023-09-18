const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'info',
  description: 'Information sur moi (Modoration)',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:pushpin: Voici quelques information sur moi !`)
      .setColor('#2F3136')
      .setDescription(':flag_fr: Je suis un robot 100% français, codé et crée par Mitannie#9948 en Javascript ! :flag_fr: ')
      .addField(`🔗 Liens:`,`- [Support](https://discord.gg/UZNTK2m8E4)\n- [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=1046120533521092639&permissions=8&scope=bot)`,true)
      .setTimestamp()
      .setFooter({

        text: `Modoration`,
        iconURL: `https://cdn.discordapp.com/attachments/1046126163082346666/1046138545326264382/bot.png`
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}