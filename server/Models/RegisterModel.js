const mongoose=require("mongoose")

const RegisterSchema=new mongoose.Schema({
          username:{
            type:String
          },
          password:{
            type:String
          },
          conformpassword:{
            type:String
          },
          mobile:{
            type:Number,
            min: 1000000000, // Assuming mobile number should have at least 10 digits
            max: 9999999999
          },
})

const RegisterModel=mongoose.model("Register",RegisterSchema)
module.exports=RegisterModel;