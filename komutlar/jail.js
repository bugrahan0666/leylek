const Discord = require('discord.js');
const db = require("quick.db")
const moment = require('moment')
require("moment-duration-format")
exports.run = async (client, message, args) => {
   if (!message.member.roles.has('756247227407794267') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Cezalıya Atılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
  let user = message.mentions.users.first();
  let rol = message.mentions.roles.first()
  let member = message.guild.member(kullanıcı)
   let reason = args.slice(1).join(" ")
      if(!reason) return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Cezalıya Atılma Sebebini Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
  
          message.react("EMOJİ ID");
  message.guild.members.get(member.id).roles.forEach(r => {
message.guild.members.get(member.id).removeRole(r) 
   
})
  member.addRole('756255483605811342')
     const kanal = message.guild.channels.find(c => c.id == "756457572248322058")
       db.add(`jail.${message.author.id}.${message.guild.id}`, 1)
    const embed1 = new Discord.RichEmbed()
    .setAuthor(message.author.tag , message.author.avatarURL)
    .setDescription(`<@!${kullanıcı.id}> Adlı Kullanıcı <@!${message.author.id}> Tarafından Cezalıya Atıldı\nSebep: **${reason}**`)
    .setColor("RANDOM")
    .setFooter(message.author.tag , message.author.avatarURL)
    .setTimestamp()
  
  let embed = new Discord.RichEmbed() 
  .setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription(`${kullanıcı} Adlı Kullanıcı **${reason}** Sebebiyle Cezalıya Atıldı`) 
  .setFooter(`Phentos`)
  .setColor("RANDOM")
  .setTimestamp()
  return message.channel.send(embed).then(kanal.send(embed1));
  
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ceza","cezalandır","cezalı","karantina"],
  kategori: "Yetkili Komutları",
  permLevel: 0
}

exports.help = {
  name: 'jail',
  description: "Etiketlenen kişinin tüm rollerini alıp jail'e atar.",
  usage: 'jail @etiket Sebebi'
}