const Discord = require('discord.js')

exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  if(!user) return message.channel.send('Sarılacağın birisini etiketlemelisin')
  
    
  if ( message.react('??')) {
      var sarl = [
      'https://media.giphy.com/media/b1vd93Y71rZewZNbn9/giphy.gif'];

      var sarl = sarl[Math.floor(Math.random() * sarl.length)];
  }
    
    if (message.react('??')) {
    const op = new Discord.RichEmbed()
    .setDescription(`<@${message.author.id}>` + ` <@${user.id}> adlı kullanıcıya sarıldı. :heart:`)
    .setColor('RANDOM')
    .setImage(sarl)
    return message.channel.send(sarl)
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