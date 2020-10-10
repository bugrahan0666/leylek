const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Öpüceğin birisini etiketlemelisin')
  
    
  if ( message.react('??')) {
      var gif = [
      'https://cdn.weeb.sh/images/Sk2gmRZZG.gif', ];

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
  aliases: ['sarıl'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  komut: 'sarıl',
  description: 'sarıl',
  usage: 'sarıl'
};