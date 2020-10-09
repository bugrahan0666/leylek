const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json"); 
const chalk = require("chalk"); 
const moment = require("moment"); 
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const weather = require("weather-js");
const fs = require("fs"); 
const db = require("quick.db"); 
const http = require("http"); 
const express = require("express"); 
require("./util/eventLoader")(client); 
const path = require("path"); 
const request = require("request");
const snekfetch = require("snekfetch");
const queue = new Map(); 
const YouTube = require("simple-youtube-api"); 
const ytdl = require("ytdl-core"); 
const app = express(); 
app.get("/", (request, response) => {

  console.log(Date.now() + " Ping tamamdır."); 

  response.sendStatus(200); 
});

   client.on('guildMemberAdd', member => {
if(!member.guild.id === '756241474148106360') return;
if(member.bot) return;
member.guild.members.get(member.id).addRole('756255623422673058')
})

client.on("guildMemberAdd", (member) => {
member.setNickname ( "π İSİM | YAŞ ")
})

app.listen(process.env.PORT); 

setInterval(() => {

  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000); 


var prefix = ayarlar.prefix;

const log = message => {
  

  console.log(`${message}`); 
};

client.commands = new Discord.Collection(); 

client.aliases = new Discord.Collection(); 

fs.readdir("./komutlar/", (err, files) => {

  if (err) console.error(err);

  log(`${files.length} komut yüklenecek.`); 

  files.forEach(f => {

    let props = require(`./komutlar/${f}`);

    log(`Yüklenen komut: ${props.help.name}.`); 

    client.commands.set(props.help.name, props); 

    props.conf.aliases.forEach(alias => {

      client.aliases.set(alias, props.help.name);
    }); 
  });
}); 

client.reload = command => {
 

  return new Promise((resolve, reject) => {

    try {

      delete require.cache[require.resolve(`./komutlar/${command}`)];

      let cmd = require(`./komutlar/${command}`);

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {

        if (cmd === command) client.aliases.delete(alias); 
      });
      client.commands.set(command, cmd); 

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name); 
      }); 

      resolve(); 
    } catch (e) {

      reject(e);
    } 
  }); 
}; 

client.load = command => {


  return new Promise((resolve, reject) => {

    try {

      let cmd = require(`./komutlar/${command}`);

      client.commands.set(command, cmd);

      cmd.conf.aliases.forEach(alias => {

        client.aliases.set(alias, cmd.help.name);
      });

      resolve();
    } catch (e) {

      reject(e);
    }
  }); 
};

client.unload = command => {
  

  return new Promise((resolve, reject) => {

    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)]; 

      let cmd = require(`./komutlar/${command}`); 

      client.commands.delete(command); 

      client.aliases.forEach((cmd, alias) => {
        

        if (cmd === command) client.aliases.delete(alias); 
      }); 

      resolve(); 
    } catch (e) {
      

      reject(e); 
    } 
  });
};


client.elevation = message => {
 

  if (!message.guild) {


    return; 
  }
  let permlvl = 0; 

  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;

  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;

  if (message.author.id === ayarlar.sahip) permlvl = 4; 

  return permlvl; 
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g; 

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
}); 


client.on("error", e => {

  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});


client.login(ayarlar.token);

client.on('ready', ()=>{
client.channels.get('756849938809487450').join()
})

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selam') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamın aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamun aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});
client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'Selamun Aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on("message", message => {
  if(message.content.toLowerCase() === "sa") {
    message.channel.send("Aleyküm Selam Hoşgeldin!");
  }
  
  
 
  
  
  
  client.on("userUpdate", async(eski, yeni) => {
  if(eski.username !== yeni.username) {
  if(!yeni.username.includes("π") && client.guilds.get("756241474148106360").members.get(yeni.id).roles.has("756249558631186546")) {
     client.guilds.get("756241474148106360").members.get(yeni.id).removeRole("756249558631186546")
     client.channels.get('756874144787857428').send(`:broken_heart: ${yeni}, TAG tagını çıkardı!`)
    }
     if(yeni.username.includes("π") && !client.guilds.get("756241474148106360").members.get(yeni.id).roles.has("756249558631186546")) {
      client.channels.get('756874144787857428').send(`:heart: ${yeni}, TAG tagını aldı!`)
      client.guilds.get("756241474148106360").members.get(yeni.id).addRole("756249558631186546")
     }
  }
  }) 
  
});

client.on("message", message => {
    const dmchannel = client.channels.find("id", "756874144787857428");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}` 
        }})
    }
});


client.on(`guildMemberAdd`, async member => {
  const phentostag = client.emojis.get('758826993285726208')
  const tac = client.emojis.get('757280968683028520')
  const phentoselmas = client.emojis.get('758830318987378688')
  const jaus1embed = new Discord.RichEmbed()
    .setColor(`RED`)
    .setTitle("PHENTOS KRALLIĞI")
    .setDescription(`${phentostag} Phentos Krallığına Hoşgeldin! ${phentostag} \n${tac}  Kuralları okumayı unutma! \n${tac}  Tag alıp bize destek olabilirsiniz!  \n${phentoselmas}   İyi eğlenceler! ${phentoselmas}`)
    .setFooter('Phentos | Developed By Phentos');
  member.send(jaus1embed);
});



   const ms = require("parse-ms");
client.on("message", async message => {
  
  
  
  if(message.author.bot) return;
  if(!message.guild) return;
  if(message.content.includes(`${prefix}afk`)) return;

  if(await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    message.channel.send(new Discord.RichEmbed()
    .setTitle("Bize Yakın!")
                         .setColor("RANDOM")
                         .setDescription(`<@!${message.author.id}> AFK Modundan çıktı. Tekrar Hoşgeldin! \n `)
                         .setFooter("Developed By Phentos")
                         .setTimestamp()).then(msg => msg.delete(15000))
  }
     try {
      let takma_ad = message.member.nickname.replace("[AFK]", "");
      message.member.setNickname(takma_ad).catch(err => console.log(err));
    } catch (err) {
      console.log(err.message);
    }
  // bir şey yokki bi zahmet hata versin ha
//Tekrar Hoşgeldin! \n Kullanıcı ${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s boyunca AFK modundaydı bunu ekleyince bozuluyo biliyo musun ?
  
        var USER = message.mentions.users.first();

  if(!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);
  
  if(REASON) {
      let süre = await db.fetch(`afk_süre_${USER.id}`);
      let timeObj = ms(Date.now() - süre);
    let mesaj = `${USER.tag} kullanıcısı AFK\nAFK süresi: ${timeObj.hours} Saat ${timeObj.minutes} Dakika ${timeObj.seconds} Saniye\nSebep:\n **${REASON}** `
   
    message.channel.send(new Discord.RichEmbed()
    .setTitle("Bizden Uzakta!")
                         .setColor("RANDOM")
                         .setDescription(mesaj)
                         .setFooter("Developed By Phentos")
                         .setTimestamp()).then(msg => msg.delete(15000))

  }
});

client.on('guildMemberAdd', async member => {
  await member.addRole(`756255623422673058`) 
let member2 = member.user 
let zaman = new Date().getTime() - member2.createdAt.getTime()
var user = member2 
var takizaman = [];
if(zaman < 604800000) {
takizaman = '<a:phentostehlike:759135274382655491> Tehlikeli'
} else {
takizaman = `<a:phentostik:759134613783183420>  Güvenli`}require("moment-duration-format");
 let zaman1 = new Date().getTime() - user.createdAt.getTime()
 const gecen = moment.duration(zaman1).format(` YY [Yıl,] DD [Gün,] HH [Saat,] mm [Dakika,] ss [Saniye]`) 
 let dbayarfalanfilan = await db.fetch(`takidbayar${member.guild.id}`)
 let message = member.guild.channels.find(x => x.id === `756257487279227051`)
  const taki = new Discord.RichEmbed()
 .setTitle(
     "Phentos Krallığına Hoşgeldin"
   )
   .setDescription(`<a:phentostag2:758826993285726208> **・** **Sunucumuza Hoş geldin** ${member} 
   
<a:phentostag2:758826993285726208>**・Seninle Beraber** ${message.guild.memberCount} **Kişiyiz**

<a:phentostag2:758826993285726208>**・** **Kaydının Yapılması İçin Register Odalarına Girebilirsin**

<a:phentostag2:758826993285726208>**・**<@&756248067669360811> **Rolündeki Yetkililer Seninle İlgilenecektir**

<a:phentostag2:758826993285726208>*・** **Bu Kullanıcı** **|** **${takizaman}**
<a:phentostag2:758826993285726208>**・** **Hesap Açılalı** ${gecen} **Olmuş**
`)
  .setFooter("Phentos | Developed By Phentos")
  .setTimestamp()
.setColor("RANDOM")
message.send(taki)
 
         });


// REKLAM \\
client.on("message", async message => {
    if (message.member.roles.find("id", "756241739093770302")) return;
    let links = message.content.match(/(http[s]?:\/\/)(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/gi);
    if (!links) return;
    if (message.deletable) message.delete();
    message.channel.send(`Hey ${message.author}, sunucuda link paylaşamazsın!`)
})



//--------------------------------------ROL-BOT KORUMA-----------------------------------------//
client.on("roleDelete", async(role , channel , message , guild) => {
  let rolkoruma = await db.fetch(`rolk_${role.guild.id}`);
    if (rolkoruma == "acik") {
  role.guild.createRole({name: role.name, color: role.color,  permissions: role.permissions}) 
        role.guild.owner.send(`**${role.name}** Adlı Rol Silindi Ve Ben Rolü Tekrar Oluşturdum  :white_check_mark:`)

  
}
})


//KANAL KORUMA
client.on("channelCreate", async (channel, member, guild) => {
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (kanal == "acik") {
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setDescription(
        "Sunucunuzda yeni bir kanal oluşturuludu! fakat geri silindi! (Phentos Kanal Koruma Sistemi) "
      )
      .setColor("BLACK");
    channel.guild.owner.send(embed);
    return;
  } else {
    return;
  }
});


client.on("message", message => {
  if(message.content.toLowerCase() === "tag" ) {
    message.channel.send("π");
  }
  });