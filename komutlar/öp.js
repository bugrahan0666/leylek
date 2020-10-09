const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Öpüceğin birisini etiketlemelisin')
  
    
  if ( message.react('??')) {
      var gif = [
      'https://media.giphy.com/media/l2SpQaZIPgpdwBTI4/giphy.gif', 'https://media.giphy.com/media/47hWogQ3tjW9i/giphy.gif', 'https://media.giphy.com/media/zfuzcZdVNYL6/giphy.gif', 'https://media.giphy.com/media/3oz8xIZrAhijabg69a/giphy.gif', 'https://media.giphy.com/media/Ij1cbMbIWDKDK/giphy.gif', 'https://media.giphy.com/media/l2JegJ1EAA2NIxEWY/giphy.gif', 'https://media.giphy.com/media/3o6ozHbQHZzDTxRjsA/giphy.gif', 'https://media.giphy.com/media/3o7TKqhF898sKm6opy/giphy.gif', 'https://media.giphy.com/media/3o72F3zlbWvP4kJp4c/giphy.gif'];

      var gifler = gif[Math.floor(Math.random() * gif.length)];
  }
    
    if (message.react('??')) {
    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}> adlı kullanıcıyı öptü. :kiss:`)
    .setColor('RANDOM')
    .setImage(gifler)
    return message.channel.send(op)
    }
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  komut: 'öp',
  description: 'öp',
  usage: 'öp'
};