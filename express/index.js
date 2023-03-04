const express = require("express")  //importando o express
const app = express()               //iniciando o express

app.get("/", function(req, res){
    res.send("<h1>Bem vindo ao guia do programador!</h1>")
})

app.get("/blog", function(req, res){
    res.send("Bem vindo ao meu blog!")
})

app.get("/canal/youtube", function(req, res){
    res.send("Bem vindo ao meu canal!")
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu algum erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})

