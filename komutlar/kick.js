const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .addField(`Hatalı Kullanım` , `"Kick" Komutunu Özel Mesajlarda Kullanamazsınız` )
  .setColor("RANDOM")
  .setFooter(message.author.tag ,message.author.avatarURL)
  .setTimestamp()
  return message.author.send(ozelmesajuyari); }
   if (!message.member.roles.has('KİCK YETKİLİSİ ROL ID') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Yetersiz Yetki` , `Bu Yetkiyi Kullanmak için Yeterli Yetkiye Sahip Değilsin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Lütfen Atılacak Kullanıcıyı Etiketleyin`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000)).catch(console.error);

  if (!message.guild.member(user).kickable) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`Hatalı Kullanım` , `Yöneticileri Atamam`).setColor("RANDOM").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp()).then(m => m.delete(10000));;
  message.guild.member(user).kick();

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at',"kick"],
  permLevel: 2
};

exports.help = {
  name: 'kick',
  description: 'İstediğiniz kişiyi sunucudan atar.',
  usage: 'kick [kullanıcı] [sebep]'
};