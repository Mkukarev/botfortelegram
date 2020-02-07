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
  }

router.post("/", (req, res)=>{
    console.log(req.body.message)
    if (req.body.message != undefined){
        if(req.body.message.text == "3"){
        // sayHiInChat()
        axios.get(`https://api.telegram.org/bot864912065:AAEZ6W467E4-fqvtg29viBxeP6RFcTprfGg/sendMessage?chat_id=-1001477106393&text=ЗдароваБандиты!`)
        // console.log("tut")
        // sayHi()
    }
    }
    
})

module.exports = router
