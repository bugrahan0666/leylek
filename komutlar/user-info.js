const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Phentos"

exports.run = async (bot, msg, args) => {
        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
        let user = msg.mentions.users.first() || msg.author;
        let userinfo = {};
        userinfo.avatar= user.displayAvatarURL;
        userinfo.id = user.id;
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `Rahatsız Etmeyin`)
        .replace("online", `Çevrimiçi`)
        .replace("idle", `Boşta`)
        .replace("offline", `Çevrimdışı`)
        userinfo.dctarih = moment.utc(msg.guild.members.get(user.id).user.createdAt).format('**DD** MMMM **YYYY** dddd **[Günü]** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.get(user.id).joinedAt).format('**DD** MMMM **YYYY** dddd **[Günü]** **[Saat:]** __**HH:mm:ss**__')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)
        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
         
        const uembed = new Discord.RichEmbed()
        .setThumbnail(userinfo.avatar)
        .setColor('RANDOM')
        .setTitle('Kullanıcı Bilgi')
        .addField("Kullanıcı", `<@!${userinfo.id}>`, true)
        .addField("Kullanıcı ID", `**${userinfo.id}**`, true)
        .addBlankField()
        .addField("Durum", `**${userinfo.status}**`, true)
        .addField("Şuan Oynadığı Oyun", `__**${userinfo.od1}**__`, true)
        .addBlankField()
        .addField("Sunucuya Katılma Tarihi", `${userinfo.dctarihkatilma}`, true)
        .addField("Hesap Oluşturma Tarihi", `${userinfo.dctarih}`, true)
        .setFooter('Phentos Yönetim - Kullanıcı Bilgi')
        msg.channel.send(uembed)
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["info","kullanıcı-bilgi","k-bilgi","userinfo"],
  permLevel: 0
};
exports.help = {
  name: 'userinfo',
  description: 'İstediğiniz kullanıcını bilgilerini gösterir.',
  usage: 'userinfo'
};