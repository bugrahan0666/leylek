 const db = require("quick.db")
 const Discord = require("discord.js");

exports.run = function(client, message, args) {
console.log("Sea")
  
   if(!message.member.nickname) return message.member.setNickname("[AFK] " + message.member.user.username)
  message.member.setNickname("[AFK] " + message.member.nickname).catch(err => console.log(err));
  console.log("ase")
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send("AFK olmak için bir sebep belirtin.");
  console.log("nabıon")
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  console.log("hiç sen")
  let mesaj = `<@${USER.id}> adlı kullanıcı **${REASON}** sebebiyle artık AFK!`
  message.channel.send(new Discord.RichEmbed()
                       .setTitle ("Bizden Uzakta!")
                       .setColor("RANDOM")
                       .setDescription(mesaj)
                       .setFooter("Developed By Phentos")
                       .setTimestamp()
  )
  //message.channel.send(mesaj)
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Kullanıcııyı afk moduna sokar.',
  usage: 'afk <sebep>'
};
