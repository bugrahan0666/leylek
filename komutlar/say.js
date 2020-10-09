 const Discord = require("discord.js");

const mapping = {
  " ": "   ",
  "0": "0️⃣",
  "1": "1️⃣",
  "2": "2️⃣",
  "3": "3️⃣",
  "4": "4️⃣",
  "5": "5️⃣",
  "6": "6️⃣",
  "7": "7️⃣",
  "8": "8️⃣",
  "9": "9️⃣", 
  "!": "❕",
  "?": "❔",
  "#": "#️⃣",
  "*": "*️⃣"
};

"abcdefghıijklmnoprstşuüvyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  let offlinesayi = message.guild.members.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**<a:phentoskanat:759699989315584030> Çevrimdışı Kişi Sayısı** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**<a:phentoskanat:759699989315584030>  Sunucudaki Kişi Sayısı:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let onlinesayi = message.guild.members.filter(
    only => only.presence.status != "offline"
  ).size;
  let online = '**<a:phentoskanat:759699989315584030>  Sunucumuzda Toplam Aktif Sayısı** ' + `${onlinesayi}`
      
      .split("")
      .map(c => mapping[c] || c)
      .join("")
  
   
const embed = new Discord.RichEmbed()
.setTitle('PHENTOS KİNGDOM | SUNUCU İSTATİSTİKLERİ')
.setColor('RANDOM')
.setDescription('' + sunucu + '\n \n' + online + '\n \n' + offline + '')


  message.channel.send(embed)
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
}; 