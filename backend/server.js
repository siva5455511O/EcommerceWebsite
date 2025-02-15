const express = require("express")



// app config

const app = express()

// middleware
app.use(express.json())

// server connect 

app.listen("4004",()=>{
    console.log("server connect on port");
    
})