client.on('message', async (message) => {
    if (
      message.content.toLowerCase().startsWith(prefix + 'clear') ||
      message.content.toLowerCase().startsWith(prefix + 'c ')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You cant use this command since you're missing `manage_messages` perm");
      if (!isNaN(message.content.split(' ')[1])) {
        let amount = 0;
        if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
          amount = 1;
        } else {
          amount = message.content.split(' ')[1];
          if (amount > 100) {
            amount = 100;
          }
        }
  
  /* 1. Solution */
  
        await message.delete().catch(e => { amount++; });
  
        await message.channel.bulkDelete(amount, true).then((_message) => {
          message.channel.send(`Bot cleared \`${_message.size}\` messages :broom:`).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2500);
          });
        });
  
  /* 2. Solution */
        const messagesToDelete = await message.channel.messages.fetch({ before: message.id, limit: amount });
  
        await message.channel.bulkDelete(messagesToDelete, true).then((_message) => {
          message.channel.send(`Bot cleared \`${_message.size}\` messages :broom:`).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2500);
          });
        });
  
  /* 3. Solution */
  
        amount >= 100 ? await message.delete() /* You can only bulk delete 100 messages */ : amount++;
  
        await message.channel.bulkDelete(amount, true).then((_message) => {
          message.channel.send(`Bot cleared \`${_message.size}\` messages :broom:`).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2500);
          });
        });
  
  /* The following code is your old code */
  
      } else {
        message.channel.send('enter the amount of messages that you would like to clear').then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      }
    } else {
      if (message.content.toLowerCase() === prefix + 'help clear') {
        const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
        newEmbed
          .setDescription('This command clears messages for example `.clear 5` or `.c 5`.')
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
          .setTimestamp();
        message.channel.send(newEmbed);
      }
    }
  });