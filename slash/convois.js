const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'convois',
  description: 'Informations relative aux convois',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`» Voici les informations relative aux convois`)
      .setColor('#005a45')
      .setDescription('**Prochain convoi**')
      .addFields(
        { name: 'Il n\'y a aucun convoi de programer.', value: `Revenez plus tard ou activé dans le salon des roles le role '🚚 Convois'`, inline: false },
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | ${client.user.tag}`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const règles = new MessageEmbed()
      .setTitle("Categories » 🚚 RÈGLES DES CONVOIS")
      .setColor('#005a45')
      .setDescription("```yaml\nVoici la liste des règles à respecter pour les convois:```")
      .addFields(
        { name: '・Étiquette officielle de la société requise à tout convoi.', value: ` `, inline: false },
        { name: '・Variations de balises comme (France Logistique | STAFF) est autorisé que pour le staff.', value: ` `, inline: false },
        { name: '・Seules les remorques simples sont autorisées lors des événements publics.', value: ` `, inline: false },
        { name: '・Aucun dépassement à aucun moment.', value: ` `, inline: false },
        { name: '・Maintenez une distance suffisante - au moins 50 m à moins de moins de 20 km/h.', value: ` `, inline: false },
        { name: '・Vous ne pouvez pas avoir de cargaison de plus de 15 tonnes, sauf dans un convoi de transport lourd.', value: ` `, inline: false },
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | ${client.user.tag}`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const demande = new MessageEmbed()
      .setTitle("Categories » Demander un convoi")
      .setColor('#005a45')
      .setDescription("```yaml\nVoici les étapes pour demander un convoi:```")
      .addFields(
        { name: '1:', value: `Etre membre de France Logistique`, inline: true },
        { name: '2:', value: `Donner une date ( Le week end de preference ) et se mettre d'accord avec `, inline: true },
        { name: '3:', value: `Envoyer toutes les informations en message privé a Mitannie`, inline: true },
        
      )
      .setTimestamp()
      .setFooter({
        text: `Demandé par ${interaction.user.username} | ${client.user.tag}`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const components = (state) => [
      new MessageActionRow().addComponents(
        new MessageSelectMenu()
          .setCustomId("help-menu")
          .setPlaceholder("Veuillez sélectionner une catégorie")
          .setDisabled(state)
          .addOptions([{
            label: `🚚 RÈGLES DES CONVOIS`,
            value: `règles des convois`,
            description: `Liste des règles à respecter pour les convois`,
            emoji: `🚚`
          },
          {
            label: `Demander un convoi`,
            value: `demander un convoi`,
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
      if (interaction.values[0] === "règles des convois") {
        interaction.update({ embeds: [règles], components: components(false) }).catch((e) => { });
      } else if (interaction.values[0] === "demander un convoi") {
        interaction.update({ embeds: [demande], components: components(false) }).catch((e) => { });
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

// Code fait par Mitannie
// Pour plus de code gratuit: https://github.com/Mitannies/France-Logistique
// Licence MIT:
// MIT License

// Copyright (c) 2023 France Logistique

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.