// const axios = require("axios")
// const express = require("express")
// const bodyParser = require("body-parser")
// const app = express()

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
//replace the value below with the Telegram token you receive from @BotFather
const token = '864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// app.use(bodyParser.json())
// app.listen(process.env.PORT)

// app.post("/" + bot.token, (req,res) =>{
//   bot.processUpdate(req.body)
//   res.sendStatus(200)
// })

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


