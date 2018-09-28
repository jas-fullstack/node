const express = require("express"); 
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
var router = express.Router();

//database connection
require ("./mongo");
//models
require("./model/Post");
require("./model/Users");

//access model 
const Post = mongoose.model("Post");

// About page route.
router.get('/about', function (req, res) {
    res.send('About this wiki');
})

app.get("/posts", async (req,res)=>{
    
    try {
        const posts = await Post.find({}, (err, res)=>{
            if (err) {
                console.log(err,"errror")
            } else {
                console.log(res, "response ")
            }
        });
        res.send(posts);
    } catch (error) {
        console.log("in catch", error)
        res.send(error);
    }
});
//middle ware... 
app.use(bodyParser.json());

app.post("/posts",async (req , res)=>{
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

app.get("/get_single_post/:id", async (req, res)=>{
    
    try {    
        const posts = await Post.find({_id:req.param.id});
        res.send(posts);
    } catch (error) {
        
    }
});

app.listen(3001,function(){
    console.log("server is runing on 3001");
});
app.post("users",async (req, res)=> {
    const users = new Users();
  //  users.
});

module.exports = router;