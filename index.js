const express=require("express");
const app=express();
const path=require("path");
const PORT=8000
//middlewares and other stuffs
app.use(express.urlencoded({extended:false}))//used for handling forms
app.use(express.json()); //handle json files
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));//shows the location of viewengine
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the 'public' folder

const json=require("./image.json");
app.get("/",function(req,res){
    return res.json(json);
})
app.listen(PORT,(req,res)=>{
    console.log(`Server is listening at ${PORT} port`);
})
