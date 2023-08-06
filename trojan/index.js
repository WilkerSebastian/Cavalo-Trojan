const {Worker} = require("worker_threads")

console.log("iniciando o jogo espere");

const localtunnel = new Worker("./tunnel.js")
localtunnel.on("message", () => {
    console.log("carregando...");
})

setTimeout(() => {

    const worker = new Worker("./server.js")
    worker.on("message", () => {})

}, 10000)