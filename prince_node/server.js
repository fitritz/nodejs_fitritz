const express=require('express');
const app=express();
const db=require('./db');
const Menu=require('./menu');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send(' Hello World!-i am backend developer ');
})
app.get('/chicken',(req,res)=>{
    res.send(' we are having steroids biryani ');
})
app.get('/menu',(req,res)=>{
    res.send(json(Menu));
})
app.post('/menu',(req,res)=>{
const data=req.body;
const newMenu = new Menu(data);
newMenu.save()
  .then(() => res.status(200).json({ message:'Menu item saved successfully'}))
  .catch(err => res.status(500).json({ error: err.message }));
})


app.listen(3000,()=>{
    console.log("listening to port 3000");
})

