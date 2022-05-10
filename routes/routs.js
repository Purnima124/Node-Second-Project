const express=require("express")
const router=express.Router()

const serve=require("../controller/logical2")


router.get('/getdata',serve.get_data)
router.post('/postdata',serve.postdata)

module.exports=router








