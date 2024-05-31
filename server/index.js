const express=require("express");
const mongoose=require("mongoose");

const app=express();

const dotenv=require("dotenv");
const { PostRegister, GetRegister } = require("./Controller/RegisterController");
const cors=require("cors")
dotenv.config();

app.use(express.json());
app.use(cors())



app.post("/register",PostRegister)
app.get("/register",GetRegister)



mongoose.connect(process.env.MONGO_URL,{

})
.then(()=>{
    app.listen(process.env.PORT,()=>
        console.log(`server Port ${process.env.PORT}`));
        console.log("db connected");
})
.catch((error)=>{
   console.log(`${error} did not connect`)
})


    
