const exports=require("express");
const { PostRegister, GetRegister } = require("../Controller/RegisterController");

const router=express.Router();

router.post("/",PostRegister);
router.get("/",GetRegister);


module.exports=router;