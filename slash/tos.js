const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'tos',
  description: 'TOS du site web de France Logistique',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(`:information_source: Voici les TOS officiels de France Logistique.`)
      .setColor('#005a45')
      .setDescription(':pushpin: https://france-logistique-tmp.fr/tos')
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | France Logistique`,
        iconURL: interaction.user.displayAvatarURL()
      })

    const initialMessage = await interaction.reply({ embeds: [embed] });

    const filter = (interaction) => interaction.user.id === interaction.member.id;
    }}

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
