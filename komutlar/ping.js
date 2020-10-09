const Discord = require('discord.js')

exports.run = async (client, message, args, color) => {

    let start = Date.now(); message.channel.send("Ölçüm Yapılıyor...").then(message => { 
    let diff = (Date.now() - start); 
    let API = (client.ping).toFixed(2)
        
        let embed = new Discord.RichEmbed()
        .setTitle(`Bot İstatistik`)
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL)
        .addField("📶・Mesaj Gecikmesi", `${diff}ms`, true)
        .addField("💻・Bot Gecikmesi", `${API}ms`, true)
        .setFooter("Phentos", client.user.avatarURL)
        message.edit(embed);
      
    });

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

exports.help = {
    name: 'ping',
    category: 'kullanıcı'
} 