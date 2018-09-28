const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
//database connection
require ("./mongo");
//models
require("./model/Post");

//access model 
const Post = mongoose.model("Post");

app.get("/", async (req,res)=>{
    
    try {
        const posts = await Post.find({});
        res.send(posts);
    } catch (error) {
        res.status(500);
    }
     skjdfhjksdf
});
//middle ware... 
app.use(bodyParser.json()).use(morgan());

app.post("/",async (req , res)=>{
    try {
        
    const post = new Post();
    post.title = req.body.title;
    post.content = req.body.content;
    await post.save();
        res.send(post);
    } catch (error) {
        res.status(500);
    }
});

app.get("/postId", async (req, res)=>{
    try {
        
        const posts = await Post.find();
        res.send(posts);
    } catch (error) {
        
    }
});

app.listen(3001,function(){
    console.log("server is runing on 3001");
});