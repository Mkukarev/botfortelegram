const axios = require('axios')
const { Router } = require('express')
const router = Router()
// const msgUrl = 'https://api.telegram.org/bot

let wordsBotAnswers = ["заебумба", "Заебумба", "бот", "тест", "эй"]
let botAnswers = ['Ебаный РОАД!', 'Кто нахуй?', "не подходи, с ножа пырну", "ты че опять упал в лужу еблом?", "АЛО ВАСЬ, ЭТО ТЫ?"]

let daysVideoArray = [
    'https://acegif.com/wp-content/gifs/horoshego-ponedelnika-16.gif',
    'https://i.gifer.com/E1tP.gif',
    'https://thumbs.gfycat.com/LamePerfumedHapuka-max-1mb.gif',
    'https://i.gifer.com/1412.gif',
    'https://lifeo.ru/wp-content/uploads/gifki-pyatnica-58.gif',
    'https://i.gifer.com/Y2cH.gif',
    'https://www.tabloidxo.com/images/life/3793/1.gif'
]


const randomAnswers = (array) => {
    return array[Math.floor(Math.random()*array.length)]
}

const sendMessage = (message) => {
    axios.get(`${msgUrl}/sendMessage`, {
        params: {
//             'chat_id': ,
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
//             'chat_id': '',
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
    // console.log(day, hour, minutes, seconds)
    if (day === 1 && hour === 4 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[0])}
    if (day === 2 && hour === 4 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[1])}
    if (day === 3 && hour === 4 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[2])}
    if (day === 4 && hour === 4 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[3])}
    if (day === 5 && hour === 12 && minutes === 20 && seconds === 0){sendVideo(daysVideoArray[4])}
    if (day === 6 && hour === 5 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[5])}
    if (day === 0 && hour === 5 && minutes === 0 && seconds === 0){sendVideo(daysVideoArray[6])}
}

setInterval(checkTime, 1000)
// -------------------------------------------------------------------------------------------------------

// Отображаем в логах время раз в минуту
// let currentTime = () =>{
//     let time = new Date()
//     console.log(
//         time.getDay(),
//         time.getHours(),
//         time.getMinutes()
//     )
// }

// setInterval(currentTime, 60000)

module.exports = router

