const Discord = require('discord.js');
const moment = require('moment');
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has('756248067669360811') && !message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komudu kullanmak için yetkin yeterli değil.').then(m => m.delete(5000));

  let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let member = message.guild.member(user)
  if (!user) return message.channel.send('Bir üye belirtmelisin.')

  let isim = args[1];
  if(!isim) return message.channel.send('Bir isim belirtmelisin.')
  let yaş = Number (args[2]);
  if(!yaş) return message.channel.send('Bir yaş belirtmelisin.')
  let sayi = db.get(`erkeks_${message.author.id}`)
  
  if (member.roles.has('756250050757263450')) {
       message.reply('Bu kişi zaten sunucumuza **Eros** olarak kaydedilmiş.')
    .setTimestamp().then(msg => msg.delete(10000))


}
else {  
  setTimeout(()=>{
 member.addRole('756250050757263450')
    
  },400)
setTimeout(()=>{
 
    member.removeRole('756255623422673058')
   
  },500)
setTimeout(()=>{
  member.setNickname(`π ${isim} | ${yaş}`)
},600)
    //tamamdır
    db.add(`erkeks_${message.author.id}`, +1)
   message.channel.send(new Discord.RichEmbed()
.setAuthor("Phentos Kayıt Sistemi | Erkek Kayıt Yapıldı") 
  .addField(`<a:phentoselmas:758830318987378688> Kaydı yapılan`,`${member.user.tag}`)
  .addField(`<a:phentoselmas:758830318987378688> Kullanıcı'nın İsmi`,`${isim}`)
  .addField(`<a:phentoselmas:758830318987378688> Kullanıcın Yaşı`,`${yaş}`)
  .addField(`<a:phentoselmas:758830318987378688> Kaydı Yapan Yetkili`,`${message.author.tag}`)
  .addField(`<a:phentoselmas:758830318987378688> Yetkilinin Toplam Kaydı`,`${sayi || '1'}`)
  .setTimestamp().setColor("RANDOM")  )
}


}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['erkek'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'erkek',
    description: '',
    usage: ''
  };