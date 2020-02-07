const axios = require('axios')
const {Router} = require ('express')
const router = Router()

const msgUrl = 'https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id'


const sayHi = ()=>{
    axios.get(`${msgUrl}=560721174&text=hello`)
  }

//   const sayHiInChat = ()=>{
//     axios.get(`${msgUrl}+=-1001477106393&text=ЗдароваБандиты!`)
//   }

  const sayHiInChat = ()=>{
    axios.get(`https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id=-1001477106393&text=ЗдароваБандиты!`)
    // axios.get(`${msgUrl}=-1001477106393&text=hello!`)
  }

router.post("/", (req, res)=>{
    
    if (req.body.message != undefined){
        let text = req.body.message.text
        let wordsBotAnswers = ["заебумба", "Заебумба", "бот", "тест", "эй"]
        if(
            wordsBotAnswers.some(some => some === text)
        ){
        // sayHiInChat()
        // axios.get(`https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id=-1001477106393&text=ЗдароваБандиты!`)
        // .then(res.send())
        
        // axios.get('https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id=-1001477106393&text=ЗдароваБандиты!')
        // axios.get(`${msgUrl}=560721174&text=hello`)
        let botAnswers = ['Ебаный РОАД!', 'Кто нахуй?', "не подходи, с ножа пырну", "ты че опять упал в лужу еблом?", "АЛО ВАСЬ, ЭТО ТЫ?"]
        axios.get('https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage',{
            params:{
                'chat_id':'-1001477106393',
                'text': botAnswers[Math.floor(Math.random()*botAnswers.length)]
            }
        })
        // axios.get(`${msgUrl}=-1001477106393&text=che_nahu'!`)
        .then(()=>res.send())
        .catch((err)=>{
            console.log(err)
            res.send()
        }
        )
        
    }
    }
    res.send()
})

module.exports = router
