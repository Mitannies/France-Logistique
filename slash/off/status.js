const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fetch = require('node-fetch');

const clientId = '1036738867988025385';
const guildId = '920712994021859360';
const websiteUrl = 'https://cracks-games.site';

const commands = [
  new SlashCommandBuilder()
    .setName('status')
    .setDescription('Vérifie le statut du site web cracks-games.site'),
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken('MTAzNjczODg2Nzk4ODAyNTM4NQ.Gn8-y5.i2VVqVqSN5DRydaUyIrC0gI5mHrz9x32Z4zEg8');

(async () => {
  try {
    await rest.put(
      Routes.applicationGuildCommands(clientId, guildId),
      { body: commands },
    );

    console.log('Slash commands successfully registered.');
  } catch (error) {
    console.error('Error while registering slash commands:', error);
  }
})();

const handleStatusCommand = async (interaction) => {
  try {
    const response = await fetch(websiteUrl);
    const statusCode = response.status;

    if (statusCode === 200) {
      interaction.reply(`Le site ${websiteUrl} est en ligne.`);
    } else if (statusCode === 503) {
      interaction.reply(`Le site ${websiteUrl} est en maintenance.`);
    } else {
      interaction.reply(`Le site ${websiteUrl} rencontre un problème (code de statut : ${statusCode}).`);
    }
  } catch (error) {
    console.error(error);
    interaction.reply(`Une erreur s'est produite lors de la vérification du statut du site.`);
  }
};

const { Client } = require('discord.js');
const client = new Client({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'status') {
    await handleStatusCommand(interaction);
  }
});
client.login('MTAzNjczODg2Nzk4ODAyNTM4NQ.Gn8-y5.i2VVqVqSN5DRydaUyIrC0gI5mHrz9x32Z4zEg8');
