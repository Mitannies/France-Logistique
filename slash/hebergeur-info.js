const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")

module.exports = {
  name: 'hebergeur-info',
  description: 'Les imformations de mon hebergeur',
  run: async (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle(` » Voici les informations sur mon hébergeur`)
      .setColor('#005a45')
      .setDescription(' ')
      .addFields(
        { name: ' ', value: `Actuellement, je suis hébergé sur les differents stockage de mon dévellopeur, Mitannie. Plus tard, je serais sois heberger sur un ancien pc qui tournera H24 à Mitannie ou sur un serveur !`, inline: false },
        )
      .addField(`🔗 Liens:`,`- [Site web](https://france-logistique-tmp.fr)`,true)
      .setTimestamp()
      .setFooter({

        text: `Demandé par ${interaction.user.username} | ${client.user.username}`,
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
