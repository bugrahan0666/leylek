const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  let enAltYetkiliRolu = message.guild.roles.get("759668564876722207"); // en alttaki rol id
  let yetkililer = message.guild.members.filter(uye => uye.highestRole.position >= enAltYetkiliRolu.position);
  let embed = new Discord.RichEmbed().setTitle(message.guild.name + " Yetkili Sayımı").setTimestamp().setFooter(message.author.tag + " tarafından istendi!")
  .setDescription(`Toplam Yetkili Sayısı: ${yetkililer.size}\nAktif Yetkili Sayısı: ${yetkililer.filter(uye => uye.presence.status !== "offline").size}\nSesli Kanalda Bulunanlar: ${yetkililer.filter(uye => uye.voiceChannel).size} | Bulunmayanlar: ${yetkililer.filter(uye => !uye.voiceChannel).size}`)
  // Online �ye Say�s�: ${message.guild.members.filter(uye => uye.presence.status !== "offline").size}
  message.channel.send(embed);
};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'ysay', 
  description: 'Yetkilileri sayar.', 
  usage: 'yetkilisay',
  kategori: 'yetkili'
};