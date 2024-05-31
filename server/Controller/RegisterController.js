const RegisterModel=require("../Models/RegisterModel");

const PostRegister=async(req,res)=>{
try {
    const{username,password,conformpassword,mobile}=req.body;

    const RegisterProcess=new RegisterModel({
           username,password,conformpassword,mobile
    })
    const RegisterSaved=await RegisterProcess.save();
    res.status(200).json(RegisterSaved)
    
} catch (error) {
    res.status(500).json({error:"internal server"})
    
}
}

const GetRegister=async(req,res)=>{
    try {
        const GetRegister=await RegisterModel.find();
    res.status(200).json(GetRegister)
    } catch (error) {
        res.status(500).json({error:"internal server"})
    }
    
}

module.exports={PostRegister,GetRegister};