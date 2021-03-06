const axios = require("axios")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors')
const webhookRouter = require('./src/routes/webhook')
// const token = 
const telegramUrl = 'https://api.telegram.org/bot'

// -----  Разработка ------------------------------------------------------
// const myUrl = 'https://a0d80a2e.ngrok.io'
// let PORT = 8080
//-------------------------------------------------------------------------

// ------ Прод --------------------------------------------------------------
const myUrl = 'https://stark-woodland-80135.herokuapp.com'
let PORT = process.env.PORT
//--------------------------------------------------------------------------

app.use(cors())
app.use(bodyParser.json())
app.use("/webhook", webhookRouter)

//----- Создание Веб Хука -------------------------
let setWebHook = () => {
  axios
.post(`${telegramUrl}${token}/setWebhook?url=${myUrl}/webhook`)
}

setWebHook()
// ------------------------------------------------

// -------------------  Не даем заснуть серверу ;) -----------------
let wakeUpServer = () => {
  axios.get(myUrl)
}

setInterval(wakeUpServer, 1200000)
// -----------------------------------------------------------------

app.get("/", async (req, res) => {
  res.send('<h1>Здарова Бандиты!</h1>')
})


app.listen(PORT)


