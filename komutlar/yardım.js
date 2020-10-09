const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

    const embed = new Discord.RichEmbed()
    
    .setColor('RANDOM')
    
    .addField(`💥LEYLEK YARDIM💥`,
              
    `-💥**adamasmaca** - Adam Asmaca oynamanızı sağlar!
     -💥**avatar** Etiketlediğiniz kişinin etiketini gösterir!
     -💥**düello** Düello oynamanızı sağlar!
     -💥**gifara** Gif aramınızı sağlar.!
     -💥**sayıtahmini-st** Rastgele Bebek Gifi Atar!
     -💥**yazı-tura** Yazı Tura oynamanızı sağlar!
     -💥**zarat** Zar atmanızı sağlar!
     -💥**öp** Birini öpmenizi sağlar!

     :white_check_mark: **Linkler** :white_check_mark:

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](BOTUNUZUN DAVET LİNKİ)    
     [Botu Eklemek İçin Tıkla](BOTUNUZUN DAVET LİNKİ)`)
    
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: 'yardımgif',
  description: 'yardımgif',
  usage: 'yardımgif'
};