const localtunnel = require("localtunnel")
const fs = require("fs")
const path = require("path")

async function troia() {

    const tunnel = await localtunnel({port: 8080})

    fs.writeFileSync(path.resolve("./out.txt"), tunnel.url)

}

troia()