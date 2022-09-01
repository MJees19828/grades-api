const express = require("express");
const dotenv = require("dotenv");
const results = require("./results");

dotenv.config();
const app = express();


const PORT = process.env.PORT ||7000

app.listen(PORT,()=>
  console.log(`server is running on ${PORT}`)

  )

  // route 
  app.get("/",(req,res)=>{
    res.send("<h1>Welcome to My Express App</h1>")
        res.json(results)
  })

  // get all results

  app.get("/results", (req,res)=>{

  })