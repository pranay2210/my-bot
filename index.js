const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!")
  }

  if (msg.content === "$whatsUp") {
    msg.reply("Just Bored with this quarantine !")
  }

  if (msg.content === "$intro") {
    msg.reply("I'm Gangsta the Detective, ready to solve the mysteries from epic horrifying instance, I'm waiting for my next big mission to solve 'THE MAD SCIENTIST' case.")
  }
  
})
client.login("Njk4MDkyODgzNTEyNjU1OTIz.XpA0Sg.Wtb37ql6cZ81R57f1EXhwkHZTeY")