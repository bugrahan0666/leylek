const Discord = require('discord.js');
const client = new Discord.Client();
const moment = require('moment');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args, msg) => {

    const embed = new Discord.RichEmbed()
    .setTitle("LEYLEK EĞLENCE BOTU")
    .setColor('RANDOM')
    .setImage('https://media.giphy.com/media/ySjWbwKMENUNFGy4nf/giphy.gif')
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

     [Botun Destek Sunucusuna Gitmek İçin Tıkla](https://discord.gg/fhBx9jw)    
     [Botu Eklemek İçin Tıkla]( https://discord.com/oauth2/authorize?client_id=764612075644256287&scope=bot&permissions=1526848)`)
    
     message.channel.send({embed});
    }
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help' , 'yardım'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'yardım',
  usage: 'yardım'
};