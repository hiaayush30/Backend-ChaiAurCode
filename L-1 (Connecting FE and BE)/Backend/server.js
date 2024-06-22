import express from "express";
import cors from "cors"

const app=express();
// app.use(cors());

app.get('/api/',(req,res)=>{
    res.send("Server Ready!");
});

app.get('/api/jokes',(req,res)=>{
    const jokes=[{
        id:1,
        title:"Joke 1",
        desc:"This is joke 1"
    },{
        id:2,
        title:"Joke 2",
        desc:"This is joke 2"
    },{
        id:3,
        title:"Joke 3",
        desc:"This is joke 3"  
    },{
        id:4,
        title:"Joke 4",
        desc:"This is joke 4"
    },{
        id:5,
        title:"Joke 5",
        desc:"This is joke 5"
    }];
   res.send(jokes);
// res.json({
//     jokes
// })
})

const port =process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server running at port ${port}`);
})