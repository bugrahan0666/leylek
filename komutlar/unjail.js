const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require("quick.db")

exports.run = async (client ,message ,args) => {
   if (!message.member.roles.has('756247227407794267') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
    let kullanıcı = message.mentions.members.first()
        if(!kullanıcı)
             return message.channel.send(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Cezalıdan Çıkarılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));
let cezalırol = message.guild.roles.get("756255483605811342");
let kayıtsızrol = message.guild.roles.get("756255623422673058");
if(!cezalırol) return message.guild.owner.send(new Discord.RichEmbed().addField(`Hata` , `Sunucuda Cezalı Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
if(!kayıtsızrol) return message.guild.owner.send(new Discord.RichEmbed().addField(`Hata` , `Sunucuda Kayıtsız Rolünü Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
db.add(`unjail.${message.author.id}.${message.guild.id}`, 1)
let member = message.guild.member(kullanıcı)
await member.addRole(kayıtsızrol)
await member.removeRole(cezalırol)
let kanal = message.guild.channels.find('id' , '756457572248322058')
    if(!kanal) return message.guild.owner.send(new Discord.RichEmbed().addField(`Hata` , `Sunucuda Cezalı Log Kanalını Bulamadığım için İşlem Yapamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  const unjail = new Discord.RichEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag , message.author.avatarURL)
.setDescription(`${kullanıcı} Adlı Kullanıcı ${message.author} Tarafından Cezalıdan Çıkartıldı`)
.setFooter(message.author.tag , message.author.avatarURL)
kanal.send(unjail)

const dcs = new Discord.RichEmbed()
.setAuthor(message.author.tag , message.author.avatarURL)
  .setDescription(`${kullanıcı} Adlı Kullanıcı Cezalıdan Çıkartıldı`) 
  .setFooter(`Phentos Yönetim`)
  .setColor("RANDOM")
  .setTimestamp()
message.channel.send(dcs)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unjail","uncezalı","unkarantina"],
  permLevel: 0
};

exports.help = {
  name: "unjail",
  description: "Belirtiniz Kullanıyı Cezalıdan Kaldırır!",
  usage: "unjail <kullanıcı>"
};