const express = require("express")
const app = express()
const PORT = 3137
const http = require("http")
const cors = require("cors")
var configDB = require('./config/database.js');

var db

app.use(cors())
app.use(express.static("client"))

app.get("/",(request,response)=> {
  response.sendFile(__dirname + "/index.html")
})

app.get('/api/character/?name=characterName', (request, response) =>{
  const characterPicked = request.params.characterName
  response.json(character[characterPicked])
})
app.listen(PORT, ()=>{
  console.log(`Head to The Citadel on ${PORT}`);
})
