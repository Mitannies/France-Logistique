const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'Bannir un membre',
    type: 1,
    options: [
        {
            name: 'user',
            description: 'Le membre à bannir',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'La raison du bannissement',
            type: 3,
            required: false
        }
    ],
    role_perms: ['914941428457689134'], //Vous devez metre le ID du role capable de bannir, comme le role STAFF
    developers_only: false, //Autoriser le proprietaire du bot uniquement = true, sinon false (Par defaut)
    category: 'Moderation',
    run: async (client, interaction, config) => {
        const userInput = interaction.options.get('user').value;
        const reasonInput = interaction.options.get('reason')?.value || 'Aucune raison fournie';

        const user = interaction.guild.members.cache.get(userInput);

        if (!user) return interaction.reply({
            content: `\`❌\` L'utilisateur n'est pas/plus dans le serveur`,
            ephemeral: true
        });

        if (!user.bannable) return interaction.reply({
            content: `\`❌\` L'utilisateur n'est pas bannissable.`,
            ephemeral: true
        });

        try {
            await interaction.guild.members.ban(userInput, { reason: reasonInput });

            user.send({
                content: `Vous avez été banni de **${interaction.guild.name}**. ${reasonInput}`
            }).catch(() => { });

            interaction.reply({
                content: `\`✅\` ${user} a été banni avec succès !`,
                ephemeral: true
            });

            return interaction.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`${user} a été banni.`)
                        .setColor('Red')
                ]
            });
        } catch {
            return interaction.reply({
                content: `\`❌\` Quelque chose s'est mal passé !`,
                ephemeral: true
            });
        };
    }
};

// Code fait par Mitannie
//Pour plus de code gratuit: https://github.com/Mitannies/France-Logistique
