const Discord = require('discord.js');

exports.run = function(client, message, args) {
 let user = message.mentions.users.first();
const tokat = "https://media.giphy.com/media/sQ4VqqaZ64QKlYcd88/giphy.gif" // geçersize düşerse değiştirin!!
                         let jaus01 = new Discord.RichEmbed()
                    .setDescription(`*Tokat atıcağın kişiyi etiketle!*`)
     .setAuthor(`Code Universe`,`${message.author.avatarURL}`)
    .setColor("CYAN") 
    if (message.mentions.users.size < 1) return message.channel.send(jaus01).catch(console.error);

    const jaus02 = new Discord.RichEmbed()
     .setAuthor(`LEYLEK`,`${message.author.avatarURL}`)
    .setColor("RANDOM") 
.setDescription(`*<@${message.author.id}> Adlı Kişi ${user} Adlı kişiyi şamarladı!*`)
    .setImage(tokat)
    return message.channel.send(jaus02);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['tokat-at','tokatat'],
  permLevel: 0
};

exports.help = {
  name: 'tokat',
};