const express=require("express")
const bodyperser=require("body-parser");
const router=require('./routes/routs')
const app=express()
const port=7000
// const {router}=require("./router/router_node")
app.use(bodyperser.urlencoded({extended:true}))
app.use(express.json)

app.use(bodyperser.json())
app.use('/',router)
app.listen(port, () => 
console.log(`port number ${port}`))






















// app.get('/',(req,res)=>{
//     con.connect(function(err) {
//         if (err) throw err;
//         con.query("SELECT * FROM data", function (err, result, fields) {
//           if (err) throw err;
//           res.send("result");
//         });
//     });
// })