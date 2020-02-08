const axios = require('axios')
const { Router } = require('express')
const router = Router()
const msgUrl = 'https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg'

let wordsBotAnswers = ["заебумба", "Заебумба", "бот", "тест", "эй"]
let botAnswers = ['Ебаный РОАД!', 'Кто нахуй?', "не подходи, с ножа пырну", "ты че опять упал в лужу еблом?", "АЛО ВАСЬ, ЭТО ТЫ?"]

let daysVideoArray = [
    'https://acegif.com/wp-content/gifs/horoshego-ponedelnika-16.gif',
    ,
    'https://thumbs.gfycat.com/LamePerfumedHapuka-max-1mb.gif',
    ,
    'https://lifeo.ru/wp-content/uploads/gifki-pyatnica-58.gif',
    ,
    'https://www.tabloidxo.com/images/life/3793/1.gif'
]


const randomAnswers = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

const sendMessage = (message) => {
    axios.get(`${msgUrl}/sendMessage`, {
        params: {
            'chat_id': '-1001477106393',
            'text': message
        }
    })
    .catch((err) => {
        console.log(err)
    })
}

const sendVideo = (video) => {
    axios.get(`${msgUrl}/sendVideo`, {
        params: {
            'chat_id': '-1001477106393',
            'video': video
        }})
        .catch((err) => {
            console.log(err)
        })
    
}

// --------------------- Обработка обращений к боту --------------

router.post("/", (req, res) => {
    let message = req.body.message
    if (message != undefined) {
        let text = message.text
        if ( wordsBotAnswers.some(some => some === text)) {sendMessage(randomAnswers(botAnswers))}
        if (text === "погода" || text === "Погода"){sendMessage("Заебись")}
    }
    res.send()
})

// ---------------------- Вкидываем в чат гифки на каждый день --------------------------------------------

let checkTime = () => {
    let time = new Date()
    let day = time.getDay()
    let hour= time.getHours()
    let minutes= time.getMinutes()
    let seconds = time.getSeconds()
    console.log(day, hour, minutes, seconds)
    if (day === 1 && hour === 8 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[0])}
    if (day === 2 && hour === 8 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[1])}
    if (day === 3 && hour === 8 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[2])}
    if (day === 4 && hour === 8 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[3])}
    if (day === 5 && hour === 16 && minutes === 20 && seconds === 0){sendVideo(daysVideoArray[4])}
    if (day === 6 && hour === 9 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[5])}
    if (day === 7 && hour === 9 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[6])}
}

setInterval(checkTime, 1000)
// -------------------------------------------------------------------------------------------------------



module.exports = router

