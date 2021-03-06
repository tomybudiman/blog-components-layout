const mongoose=require("mongoose");
const app=require("express")();
const cors=require("cors");
const parser=require("body-parser");
const dotenv=require("dotenv").config();

mongoose.connect(process.env.DB_URL);
app.use(parser.urlencoded({extended:false}));
app.use(parser.json());
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Server Ready!");
});

const api=require("./routes/articleRoute");
app.use("/api/article",api);

const user=require("./routes/userRoute");
app.use("/api/user",user);

app.listen(process.env.PORT,()=>{
  console.log(`Server started! Listenning on port ${process.env.PORT}!`);
});

module.exports=app;
