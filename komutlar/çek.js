
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
   if (!message.member.roles.has('756247565434880092') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  
    if (!message.member.voiceChannel) { return message.channel.send(new Discord.RichEmbed().addField(`İşlem Başarısız` , `Bir Ses Kanalında Olmanız Gerekiyor`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()); }
  let kullanıcı = message.mentions.users.first()
                                                                              
  if (!kullanıcı) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

    let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
  if(!member.voiceChannel) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Bir Kullanıcı Etiketleyiniz`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

const voiceChannel = message.member.voiceChannel.id;
if(!voiceChannel) return
  member.setVoiceChannel(voiceChannel);
   const voiceChannel1 = message.member.voiceChannel.name;
  let embed= new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(message.author.tag, message.author.displayAvatarURL)
    .setDescription(message.author+" **Tarafından** "+kullanıcı+" **Kullanıcısı** `"+voiceChannel1+"`** Sesli Kanalına Çekildi.**")
    .setFooter(`${message.author.tag}` , `${message.author.displayAvatarURL}`)
   .setTimestamp()  
    message.channel.send(embed).then(m =>m.delete(10000))
 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek","taşı"],
  kategori: "çek",
  permLevel: 0
}
exports.help = {
  name: 'çek',
  description: " ",
  usage: 'çek'
}