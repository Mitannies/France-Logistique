const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'help',
  description: 'Afficher toutes les commandes disponibles',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`Commands de ${client.user.username}`)
      .setColor('#005a45')
      .setDescription('**Veuillez sélectionner une catégorie pour afficher toutes mes commandes**')
      .addField(`Liens:`, `- [Site web](https://france-logistique-tmp.fr)`, true)
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const giveaway = new MessageEmbed()
      .setTitle("Categories » Modération")
      .setColor('#005a45')
      .setDescription("```yaml\nVoici les commandes pour géré la modération:```")
      .addFields(
        { name: 'Kick', value: `Expulser un Membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Ban / Unban', value: `Bannir ou débarnir un membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Mute / Unmute', value: `Mute / Unmute un membre du serveur\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'List', value: `Répertorier tous les giveaway en cours d'exécution au sein de ce serveur !\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Pause', value: `Mettre en pause un giveaway déjà en cours !\n > **Tipe: __\`slash\` / \`commande\`**`, inline: true },
        { name: 'Reroll', value: `Relancer un tirage au sort !\n > **Tipes: __\`slash\` / \`commande\`__**`, inline: true },
        { name: 'Resume', value: `Reprendre un giveaway interrompu !\n > **Tipe: __\`slash\` / \`commande\`__**`, inline: true },
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const general = new MessageEmbed()
      .setTitle("Categories » General")
      .setColor('#005a45')
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
        text: `Demandé par ${interaction.user.username} | France Logistique`,
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
            value: `modération`,
            description: `Voir toutes les commandes basées sur la modération !`,
            emoji: `👮‍♂️`
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
      if (interaction.values[0] === "modération") {
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
