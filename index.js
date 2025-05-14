const express = require("express");

const app = express();

const port = process.env.PORT?? 5000;
const num = process.env.NUM?? "26";

app.listen(port, (req,res)=> console.log("Server is listening on port", port));

app.get("", (req,res)=>{
    res.send(num);
})
