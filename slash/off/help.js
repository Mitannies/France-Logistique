const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'Liste des commandes disponibles',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`Commands de ${client.user.username}`)
      .setColor('#5a65ea')
      .setDescription('**Veuillez sélectionner une catégorie pour afficher toutes mes commandes**')
      .addField(`🔗 Liens:`,`- [Support](https://discord.gg/UZNTK2m8E4)\n- [Inviter le bot](https://discord.com/api/oauth2/authorize?client_id=1046120533521092639&permissions=8&scope=bot)`,true)
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | Modoration`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const giveaway = new MessageEmbed()
      .setTitle("Categories » Modération")
      .setColor('#5a65ea')
      .setDescription("```yaml\nVoici les commandes de modération disponibles:```")
      .addFields(
        { name: '/ban', value: `Bannir un membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: '/kick', value: `Expulser un membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: '/mute', value: `Rendre muet un membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | Modoration`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const general = new MessageEmbed()
      .setTitle("Categories » General")
      .setColor('#5a65ea')
      .setDescription("```yaml\nVoici les commandes générales du bot:```")
      .addFields(
        { name: 'Help', value: `Affiche toutes les commandes disponibles pour ce bot !\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Invite', value: `Obtenir le lien d'invitation du bot !\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Ping', value: `Vérifier la latence du bot !\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'hebergeur-info', value: "Permet d'afficher les informations sur l'hébergeur du bot !\n > **Tipe: __\`slash\` / \`commande\`__**"},
        { name: 'dons', value: "Permet d'envoyer de l'argent pour remercier la créations du bot !\n > **Tipe: __\`slash\` / \`commande\`__**"}
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | Modoration`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder("Veuillez sélectionner une catégorie")
          .setDisabled(state)
          .addOptions([{
            label: `Modération`,
            value: `giveaway`,
            description: `Voir toutes les commandes de modération`,
            emoji: `🛠️`
          },
          {
            label: `General`,
            value: `general`,
            description: `Afficher toutes les commandes générales du bot !`,
            emoji: `⚙`
          }
          ])
      ),
    ];

    const initialMessage = await interaction.reply({ embeds: [embed], components: components(false) });

    const filter = (interaction) => interaction.user.id === interaction.member.id;

    const collector = interaction.channel.createMessageComponentCollector(
      {
        filter,
        componentType: "SELECT_MENU",
        idle: 300000,
        dispose: true,
      });

    collector.on('collect', (interaction) => {
      if (interaction.values[0] === "giveaway") {
        interaction.update({ embeds: [giveaway], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "general") {
        interaction.update({ embeds: [general], components: components(false) }).catch((e) => { });
      }
    });
    collector.on('end', (collected, reason) => {
      if (reason == "time") {
        initialMessage.edit({
          content: "Collector Destroyed, Try Again!",
          components: [],
        });
      }
    })
  }
}
