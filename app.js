//jshint esversion:6
require('dotenv').config();
const express=require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const mongoose=require('mongoose');
// const encrypt = require('mongoose-encryption');
// const md5 = require('md5');
// const bcrypt = require('bcrypt');
const saltRounds =10;

const app = express();
app.use (express.static("paublic"));
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
mongoose.connect("mongodb://localhost:27017/userDB");

const userSchema = new mongoose.Schema ({
    email:String,
    password:String
});
const secret = process.env.SECRET;
// userSchema.plugin(encrypt,{secret:secret,encryptedFields:['password']});
const User =  new mongoose.model("User",userSchema);


app.get("/",function(req, res){
    res.render("home");
})
app.get("/login",function(req, res){
    res.render("login");
})
app.get("/register",function(req, res){
    res.render("register");
})
// using session 
app.post("/register",function(req,res){
})
app.post("/login",function(req,res){
})
// session end 


// using bcrypt 
// app.post("/register",function(req,res){
//     bcrypt.hash(req.body.password,saltRounds,function(err,hash){
//         const newUser = new User({
//             email:req.body.username,
//             password:hash
//         });
//         newUser.save(function(err){
//             console.log(hash);
//             if (!err){
//                 res.render("secrets");
//             } else{
//                 console.log(err);
//             }
//         })
//     })
// })
// app.post("/login",function(req,res){
//         const username=req.body.username;
//         const password= req.body.password;
//     User.findOne({email:username},function(err,foundUser){
//         if(err){
//             console.log(err);
//         } else{
//             if(foundUser){
//                 bcrypt.compare(password,foundUser.password,function(err,result){
//                     if(result===true){
//                         res.render("secrets");
//                     }else{
//                         res.send("Invalid credential");
//                      }
//                 })
                
//             } 
//         }
//     })
// })
// bcrypt end 
app.listen(3000,function(){
    console.log("server working on port 3000");
});