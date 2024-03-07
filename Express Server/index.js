import express from "express";

const app = express();

const port = 3000;

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

app.get("/",(req,res)=>{
    res.send("<h1>Hello World!</h1>")
})

app.get("/about",(req,res)=>{
    res.send("<h1>about me</h1>")
})

app.post("/reg",(req,res)=>{
    res.sendStatus(201);
})

app.put("/users/sree",(req,res)=>{
    res.sendStatus(200);
})

app.patch("/users/sree",(req,res)=>{
    res.sendStatus(200);
})