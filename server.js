const express=require("express");
const port=3000;
const app=express();
app.use(express.json());
app.use(express.static("public"));
app.listen(port,()=>{
    console.log(`port oppened in http://localhost:${port}`)
});