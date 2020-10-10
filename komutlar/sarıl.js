const Discord = require("discord.js")
const db = require("quick.db")

exports.run = (client, message, args) => {
let kişi = message.mentions.users.first() || args[0]

if(!kişi) return message.channel.send("Bir kişiyi etiketle veya idsini yaz.")

const embed = new Discord.RichEmbed() //eğer bot v11 ise RichEmbed() olarak değiştirin.
.setDescription(`<@${message.author.id}>, <@${kişi.id}> adlı kişiye sarıldı!`)
.setImage("https://media.giphy.com/media/KlcIUgc4QBktAiwrNT/giphy.gif")
return message.channel.send(embed)
}

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}

exports.help = {
name:"sarıl",
description:"etiketlediğin kişiye sarılırsınız",
usage: "sarıl @kişi/id"
}
