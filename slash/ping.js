module.exports = {
  name: "ping",
  category: "info",
  description: "Ping du bot",
  usage: "ping",
  run: (client, interaction) => {
    interaction.reply(`**:ping_pong:La latence est ${Date.now() - interaction.createdTimestamp}ms. La valeur de la latence de l'API est ${Math.round(client.ws.ping)}ms.:ping_pong:**`);
  }
  
}