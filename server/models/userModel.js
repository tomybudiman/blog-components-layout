const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const userSchema=new Schema({
  email:String,
  password:String,
  createdAt:{
    type:Date,
    default:new Date()
  }
});
const User=mongoose.model("User",userSchema);

module.exports=User;
