const axios = require("axios")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors')
// const token = '864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg'

app.use(cors())
app.use(bodyParser.json())
app.listen(process.env.PORT)

const getUpdate = async () => {
  let req = await axios.get(`https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/getUpdates`)
  return req.data.result
}

const sayHi = ()=>{
  axios.get(`https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id=560721174&text=hello`)
}

app.get("/", async (req, res) => {

  let result =  await getUpdate()
  // console.log(result)
  let request = JSON.stringify(result)

  // console.log(result[result.length-1].message.text)

  if (result[result.length-1].message.text === "привет"){
    sayHi()
  }
  
  res.send(request)
})

/*

process.env.NTBA_FIX_319 = 1;
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = 'YOUR_TELEGRAM_BOT_TOKEN';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

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

*/



/*

process.env.NTBA_FIX_319 = 1;

const TelegramBot = require('node-telegram-bot-api');
//replace the value below with the Telegram token you receive from @BotFather
const token = '864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

//
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

*/
