import  express from "express";
const app = express();

app.get('/',(req,res)=>{
    res.send("Server is ready")
});

//get a list of 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [{id:1,title:'first joke',content:'this is content of 1st joke'},
    {id:2,title:'second joke',content:'this is content of 2nd joke'},
    {id:3,title:'third joke',content:'this is content of 3rd joke'}];
    res.send(jokes);
});


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`server started at port ${port}`);
})
