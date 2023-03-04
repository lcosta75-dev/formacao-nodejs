const express = require("express")  //importando o express
const app = express()               //iniciando o express

app.get("/", function (req, res) {
    res.send("<h1>Bem vindo ao guia do programador!</h1>")
})

app.get("/blog/:artigo?", function (req, res) {

    var artigo = req.params.artigo

    if (artigo) {
        res.send("<h2>Artigo: " + req.params.artigo + "<h2>")
    } else {
        res.send("Bem vindo ao meu blog!")
    }
})

app.get("/canal/youtube", function (req, res) {
    res.send("Bem vindo ao meu canal!")
})

app.get("/ola/:nome/:empresa", function (req, res) {
    //REQ => DADOS EVIADOS PELO USUÁRIO
    //RES => RESPOSTA ENVIADA AO USUÁRIO
    var nome = req.params.nome
    var empresa = req.params.empresa
    res.send("<h1>Oi " + nome + " da " + empresa + "</h1>")
})





app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu algum erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})

