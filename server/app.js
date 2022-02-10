const express = require('express');
const cors = require('cors');
const Articles = require('./models/articleDB');
const Users=require("./models/user.js")
const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Signup
app.post('/signup',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    try{
    console.log(req.body)
    let mydata=new Users(req.body)
    let result=await mydata.save()
    res.json(result)
    }
    catch(error){
        console.log(error)
    }

});
//login
app.post('/login',async(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    try{
    const{email,password}=req.body;
    if(!email||!password){
        const user=await user.findOne({email:email})
        console.log(user)
    }
    if(!user)
    {
        res.status(400).json({error:"login failed"})
    }else{
        res.json({message:"login successfull"})
    }
    }
    catch(error){
        console.log(error)
    }

});
      
// Request to get all articles
app.get("/api/articles",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    Articles.find()
    .then(article=>res.json(article))
    .catch(err=>res.status(400).json(`Error:${err}`));
});
//Request to add new article
app.post("/api/addarticle",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE");
    const newArticle=new Articles({
        title:req.body.title,
        article:req.body.article,
        authorname:req.body.authorname
    })
    newArticle.save()
    .then(()=>res.json("New Article Added"))
    .catch(err=>res.status(400).json(`Error:${err}`));
})
//Request to find article by name and update
app.put("/api/updatearticle/:id",(req,res)=>{
Articles.findById(req.params.id)
.then(article=>{
    article.title=req.body.title;
    article.article=req.body.article;
    article.authorname=req.body.authorname;
    article.save()
    .then(()=>res.json("updated!!!!"))
    .catch(err=>res.status(400).json(`Error:${err}`));
})
})
app.put("/api/deletearticle/:id",(req,res)=>{
    Articles.findByIdAndDelete(req.params.id)
    
        .then(()=>res.json("deleted!!!!"))
        .catch(err=>res.status(400).json(`Error:${err}`));
    })
// Port number
app.listen(5000, () => {
    console.log("Listening on port 5000");
})