const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'Kick un membre',
    type: 1,
    options: [
        {
            name: 'user',
            description: 'Le membre à kick.',
            type: 6,
            required: true
        },
        {
            name: 'reason',
            description: 'La raison du kick.',
            type: 3,
            required: false
        }
    ],
    role_perms: ['914941428457689134'], //Vous devez metre le ID du role capable de kick, comme le role STAFF
    developers_only: false,
    category: 'Moderation',
    run: async (client, interaction, config) => {
        const userInput = interaction.options.get('user').value;
        const reasonInput = interaction.options.get('reason')?.value || 'Aucune raison fournie';

        const user = interaction.guild.members.cache.get(userInput);

        if (!user) return interaction.reply({
            content: `\`❌\` L'utilisateur n'est pas/plus dans le serveur`,
            ephemeral: true
        });

        if (!user.kickable) return interaction.reply({
            content: `\`❌\` L'utilisateur n'est pas kickable.`,
            ephemeral: true
        });

        try {
            await interaction.guild.members.kick(userInput, { reason: reasonInput });

            user.send({
                content: `Vous avez été kicked de **${interaction.guild.name}**. ${reasonInput}`
            }).catch(() => { });

            interaction.reply({
                content: `\`✅\` ${user} a été banni avec succès !`,
                ephemeral: true
            });

            return interaction.channel.send({
                embeds: [
                    new EmbedBuilder()
                        .setDescription(`${user} a été kick.`)
                        .setColor('Yellow')
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