const {Router} = require ('express')
const router = Router()

router.post("/", (req, res)=>{
    console.log(req)
    res.send(200)
})

module.exports = router