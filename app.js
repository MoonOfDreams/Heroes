const express=require("express");
const app = express();
const path = require("path");

app.use(express.static("public"))

app.get('/', function(req, res) {
res.sendFile(path.join(__dirname, "/views/index.html"))
})

app.get('/babbage', function(req, res) {
    res.sendFile(path.join(__dirname, "/views/babbage.html"));
})

app.listen("3030", ()=>{console.log("el server ta listo")});
