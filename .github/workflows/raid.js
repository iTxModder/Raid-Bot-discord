const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('RAID BY TX @everyone @everyone @everyone')
    .setURL('https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjU4N7P-bjmAhXhFLkGHeTSAdkQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.baixaki.com.br%2Fdownload%2Fnyan-cat-progress-bar.htm&psig=AOvVaw2C9QMSXRpxeUks4DXrJ2WG&ust=1576543827164008')
    .setImage('https://i.ytimg.com/vi/QH2-TGUlwu4/hqdefault.jpg')
    .addField('SE FUDEU KKKKKKKKKK')
         setInterval(() => {
            message.channel.send(embed);
          }, 100);
}
