const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {

var erkek = db.fetch(`erkekKayit_${message.author.id}`)
var bayan = db.fetch(`bayanKayit_${message.author.id}`)
var toplam = db.fetch(`toplamKayit_${message.author.id}`)

const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${message.author.username} Adlı Kişinin İstatistiği`, message.author.avatarURL)
.addField(`Toplam Kayıt Edilen Kişi Sayısı;`, db.fetch(`toplamKayit_${message.author.id}`) || 0)
.addField(`Kayıt Edilen Erkek Kişi Sayısı;`, db.fetch(`erkekKayit_${message.author.id}`) || 0)
.addField(`Kayıt Edilen Bayan Kişi Sayısı`, db.fetch(`bayanKayit_${message.author.id}`) || 0)
.setFooter("Phentos Kayıt Sistemi | Developed By Phentos");

message.channel.send(embed)  
  
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kayıtbilgi"],
  permLevel: 0
};

module.exports.help = {
  name: 'kayıtbilgi',
  description: '',
  usage: ''
};