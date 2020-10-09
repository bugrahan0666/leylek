const Discord = require("discord.js");
const client = new Discord.Client();
const db = require('quick.db')

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setTimestamp() 
      .addField(`Hatalı Kullanım` , `Bu Komutu Özel Mesajlarda Kullanamazsınız Lütfen Sunucu İçerisinde Herhangi Bir Kanalı Kullanınız`)
    return message.author.sendEmbed(ozelmesajuyari);
  }
   if (!message.member.roles.has('756458727170637856') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  let modlog = guild.channels.find("id", "756457649507139595");
  db.add(`ban.${message.author.id}.${message.guild.id}`, 1)
  if (!modlog) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hata` , `Log Kanalını Bulamıyorum`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
    if (message.mentions.users.size < 1)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Yasaklanacak Kullanıcıyı Etiketleyiniz`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).catch(console.error);
  if (reason.length < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Yasaklama Sebebinizi Yazınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());

  if (!message.guild.member(user).bannable)
    return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Yetkilileri Banlayamasınız`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  message.guild.ban(user, {reason: reason})
  const embed = new Discord.RichEmbed()
    .setColor("RED")
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription(`<@!${user.id}> Adlı Kullanıcı <@!${message.author.id}> Tarafından **${reason}** Sebebiyle Sunucudan Yasaklandı`)
  return guild.channels.get(modlog.id).sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban","yasakla","banla"],
  permLevel: 0
};

exports.help = {
  name: "ban",
  description: "İstediğiniz kişiyi banlar.",
  usage: "ban [kullanıcı] [sebep]"
};