function creatQuest(postivas, resp, negativo, resn, question) {

    return {

        p: {
            c:postivas,
            r: resp,
        },
        n: {
            c:negativo,
            r: resn,
        },
        q:question

    }

}

const quests = [
    creatQuest(["Sim", "Talvez"], 1, "Não", -1, "Você é um cavalo?"),
    creatQuest(["Quatro"], 2, "Duas", -1, "Com quantas pernas você anda?"),
    creatQuest(["Sim"], -1, "Não", 3, "Você pode ler e escrever?"),
    creatQuest(["Sim"], -1, false, null, "Mentira, você está lendo isso")
]

let index = 0

questAdd()

function questAdd() {

    $("#botoes").html(" ")

    if(index == -1) {

        const audio = new Audio("./audio/dies.mp3")
        audio.volume = 0.75
        audio.loop = true
        audio.play()

        $("#pergunta").text("Você não é um cavalo 🐴")

        $("#botoes").css("display", "none")

        return

    }

    const quest = quests[index]
        
    $("#pergunta").text(quest.q)

    quest.p.c.forEach(e => {

        $("#botoes").append(`
            <button class="rest btn btn-info mx-5 w-25 h-auto fs-2 text-light" href="${quest.p.r}"> ${e} </button>
        `)  

    })

    if(quest.n.c) {

        $("#botoes").append(`
            <button class="rest btn btn-info mx-5 w-25 h-auto fs-2 text-light" href="${quest.n.r}"> ${quest.n.c} </button>
        `)

    }

    $(".rest").on("click", (e) => {

        index = parseInt(e.target.getAttribute("href"))
    
        console.log(index);
    
        questAdd()
    
    })

}